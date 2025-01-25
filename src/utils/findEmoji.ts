import { emojis } from '../data/emojis.js'
import { EmojiName } from '../types.js'

export const findEmoji = (emojiName: EmojiName): string | null => {
  for (const category in emojis) {
    for (const subCategory in emojis[category]) {
      if (emojiName in emojis[category][subCategory]) {
        return emojis[category][subCategory][emojiName]
      }
    }
  }
  return null
}
