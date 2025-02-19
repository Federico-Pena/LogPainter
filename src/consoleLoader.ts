import { consoleStyler } from './consoleStyler.js'
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

    let taskResult: any

    let {
      finishMessage = 'Done',
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
      process.stdout.clearLine(1)
      process.stdout.write(`\r${alingedText}`)
      frameIndex++
    }, 200)

    if (isAsyncFunction) {
      taskResult = await task()
    } else if (task instanceof Promise) {
      taskResult = await task
    } else {
      throw new Error('Task must be an async function or a Promise.')
    }
    clearInterval(intervalId)
    process.stdout.write(clearLine)
    consoleStyler(finishMessage, {
      color: 'green',
      bold: true,
      emojiStart: 'check_mark_button'
    })
    return taskResult
  } catch (error: Error | any) {
    clearInterval(intervalId)
    process.stdout.write(clearLine + '\n')
    consoleStyler(error.name, {
      color: 'red',
      emojiStart: 'cross_mark'
    })
    consoleStyler(`${error.message}'\n`, {
      color: 'red',
      emojiStart: 'backhand_index_pointing_right',
      indent: 2
    })
    if (error.stack) {
      const stackLines = error.stack.split('\n').slice(1)
      consoleStyler('Stack trace:', {
        emojiStart: 'memo'
      })
      stackLines.forEach((line: string) => {
        consoleStyler(line.trim(), {
          indent: 4
        })
      })
    } else {
      consoleStyler('No stack trace available.', {
        emojiStart: 'memo'
      })
    }
    throw error
  }
}
