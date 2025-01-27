import { emojis } from '../data/emojis.js'
import type { EmojiName } from '../types.js'

export const getEmojiNames = (): EmojiName[] => {
  const names: EmojiName[] = []
  for (const category in emojis) {
    for (const subCategory in emojis[category]) {
      if (!emojis[category][subCategory]) continue
      const emojiNames = Object.keys(emojis[category][subCategory])
      names.push(...(emojiNames as EmojiName[]))
    }
  }
  return names.sort((a, b) => a.localeCompare(b))
}
