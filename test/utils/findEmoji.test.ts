import { expect, test, describe } from 'vitest'
import { findEmoji } from '../../src/utils/findEmoji'

describe('findEmoji', () => {
  test('should return null if emoji is not found', () => {
    const result = findEmoji('fake_emoji' as EmojiName)
    expect(result).toBe(null)
  })

  test('should return emoji if emoji is found', () => {
    const result = findEmoji('aerial_tramway')
    expect(result).toBe('🚡')
  })
})
