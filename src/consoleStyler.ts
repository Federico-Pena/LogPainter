import { ConsoleStyler } from './types.js'
import { alignText } from './utils/alignText.js'
import { applyEmojis } from './utils/applyEmojis.js'
import { formatText } from './utils/formatText.js'

export const consoleStyler: ConsoleStyler = (data, options = {}) => {
  try {
    if (typeof data !== 'string' && typeof data !== 'number') {
      console.log(data)
      return
    }
    const { emojiStart, emojiEnd, align, indent } = options
    const formattedText = formatText(data, options)
    const textWithEmojis = applyEmojis(formattedText, {
      emojiStart,
      emojiEnd
    })
    let alignedText = alignText(textWithEmojis, align)
    if (indent > 0) {
      alignedText = ' '.repeat(indent * 2) + alignedText
    }
    console.log(alignedText)
  } catch (error: any) {
    const formattedText = formatText(`${error.name}: ${error.message}`, {
      color: 'red',
      emojiStart: 'warning'
    })
    console.log(formattedText)
    throw error
  }
}
