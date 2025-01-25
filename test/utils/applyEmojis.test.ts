import { expect, test, describe } from 'vitest'
import { applyEmojis } from '../../src/utils/applyEmojis'

describe('applyEmojis', () => {
  test('should return only text if emojiStart and emojiEnd are not found', () => {
    const result = applyEmojis('Hello World', {
      emojiStart: 'fake_emoji',
      emojiEnd: 'fake_emoji'
    })
    expect(result).toBe('Hello World')
  })
  test('should return only text', () => {
    const result = applyEmojis('Hello World', {})
    expect(result).toBe('Hello World')
  })

  test('should return only start emoji', () => {
    const result = applyEmojis('Hello World', { emojiStart: 'aerial_tramway' })
    expect(result).toBe('🚡  Hello World')
  })

  test('should return only end emoji', () => {
    const result = applyEmojis('Hello World', {
      emojiEnd: 'aerial_tramway'
    })
    expect(result).toBe('Hello World 🚡')
  })

  test('should return emoji at the start and end if emojiStart and emojiEnd are found', () => {
    const result = applyEmojis('Hello World', {
      emojiStart: 'aerial_tramway',
      emojiEnd: 'axe'
    })
    expect(result).toBe('🚡  Hello World 🪓')
  })
})
