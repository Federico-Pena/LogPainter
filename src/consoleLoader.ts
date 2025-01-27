import { loaders } from './data/loaders.js'
import type { ConsoleLoader, LoadersNames } from './types.js'
import { alingText } from './utils/alingText.js'
import { applyEmojis } from './utils/applyEmojis.js'
import { formatText } from './utils/formatText.js'

export const consoleLoader: ConsoleLoader = async (task, options = {}) => {
  let intervalId: NodeJS.Timeout | undefined
  let clearLine = '\r' + ' '.repeat(process.stdout.columns) + '\r'
  try {
    const isAsyncFunction =
      typeof task === 'function' && task.constructor.name === 'AsyncFunction'

    if (!isAsyncFunction) {
      throw new Error('Task must be an async function.')
    }

    let {
      message = '',
      loaderName = 'clock',
      emojiStart = '',
      emojiEnd = '',
      aling = 'left',
      indent = 0
    } = options

    if (typeof message !== 'string' && typeof message !== 'number') {
      throw new Error('Message must be a string or a number.')
    }

    const loadertrimmed = loaderName.trim() as LoadersNames
    if (!(loaderName in loaders)) {
      throw new Error(`Loader "${loaderName}" not found.`)
    }
    loaderName = loadertrimmed.length > 0 ? loadertrimmed : 'clock'

    let frameIndex = 0
    intervalId = setInterval(() => {
      const loader = loaders[loaderName] ?? loaders.clock
      if (!loader) {
        return
      }
      const frame = loader[frameIndex % loader.length]
      const text = formatText(`${frame} ${message}`, options)
      const textWithEmojis = applyEmojis(text, {
        emojiStart,
        emojiEnd
      })
      let alingedText = alingText(textWithEmojis, aling)
      if (indent > 0) {
        alingedText = ' '.repeat(indent * 2) + alingedText
      }
      process.stdout.write(`\r${alingedText}`)
      frameIndex++
    }, 200)

    const result = await task()
    clearInterval(intervalId)
    process.stdout.write(clearLine)

    return result
  } catch (error: any) {
    clearInterval(intervalId)
    process.stdout.write(clearLine)
    const formattedText = formatText(`${error.name}: ${error.message}`, {
      color: 'red',
      emojiStart: 'warning'
    })
    console.log(formattedText)
    throw error
  }
}
