import type { EmojiName } from '../types.js'
import { findEmoji } from './findEmoji.js'
import { getEmojiNames } from './getEmojiNames.js'

export const applyEmojis = (
  text: string | number,
  { emojiStart = '', emojiEnd = '' }
) => {
  let resultText = ''
  const emojiNames = getEmojiNames()
  if (emojiStart && emojiNames.includes(emojiStart as EmojiName)) {
    resultText += `${findEmoji(emojiStart as EmojiName)}  `
  }
  resultText += `${text}`
  if (emojiEnd && emojiNames.includes(emojiEnd as EmojiName)) {
    resultText += ` ${findEmoji(emojiEnd as EmojiName)}`
  }

  return resultText.trim()
}
