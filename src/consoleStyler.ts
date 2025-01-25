import { ConsoleStyler } from './types.js'
import { alingText } from './utils/alingText.js'
import { applyEmojis } from './utils/applyEmojis.js'
import { formatText } from './utils/formatText.js'

export const consoleStyler: ConsoleStyler = (data, options = {}) => {
  try {
    if (typeof data !== 'string' && typeof data !== 'number') {
      console.log(data)
      return
    }
    const { emojiStart, emojiEnd, aling, indent } = options
    const formattedText = formatText(data, options)
    const textWithEmojis = applyEmojis(formattedText, {
      emojiStart,
      emojiEnd
    })
    let alingedText = alingText(textWithEmojis, aling)
    if (indent > 0) {
      alingedText = ' '.repeat(indent * 2) + alingedText
    }
    console.log(alingedText)
  } catch (error: any) {
    const formattedText = formatText(`${error.name}: ${error.message}`, {
      color: 'red',
      emojiStart: 'warning'
    })
    console.log(formattedText)
    throw error
  }
}
