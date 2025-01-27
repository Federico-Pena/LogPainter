import { emojis } from '../data/emojis.js'
import type { EmojiName } from '../types.js'

export const findEmoji = (emojiName: EmojiName): string | null => {
  for (const category in emojis) {
    const categoryEmojis = emojis[category]
    if (!categoryEmojis) continue

    for (const subCategory in categoryEmojis) {
      const subCategoryEmojis = categoryEmojis[subCategory]
      if (!subCategoryEmojis) continue

      if (emojiName in subCategoryEmojis) {
        return subCategoryEmojis[emojiName] ?? null
      }
    }
  }
  return null
}
