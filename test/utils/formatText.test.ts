import { expect, test, describe } from 'vitest'
import { formatText } from '../../src/utils/formatText'

describe('formatText', () => {
  test('should return text with default options', () => {
    const result = formatText('Hello World')
    expect(result).toBe('\x1b[37mHello World\x1b[0m')
  })

  test('should return text with custom options', () => {
    const result = formatText('Hello World', {
      color: 'red',
      bold: true,
      bgColor: 'yellow',
      emojiStart: 'aerial_tramway',
      emojiEnd: 'axe'
    })
    const text = '\x1b[31m\x1b[43m\x1b[1mHello World\x1b[0m'

    expect(result).toBe(text)
  })
})
