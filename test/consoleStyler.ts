import { expect, test, vi, describe, beforeEach } from 'vitest'
import { formatText } from '../src/utils/formatText'
import { consoleStyler } from '../src/consoleStyler'
import * as formatTextModule from '../src/utils/formatText'

const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
beforeEach(() => {
  vi.clearAllMocks()
})

describe('consoleStyler', () => {
  test('should log formatted text with default options for string', () => {
    const testString = 'Hello, World!'
    consoleStyler(testString)

    const formattedText = formatText(testString, {})
    expect(logSpy).toHaveBeenCalledWith(formattedText)
  })

  test('should log formatted text with custom options', () => {
    const testString = 'Hello, World!'
    consoleStyler(testString, {
      color: 'blue',
      bold: true,
      emojiStart: 'rocket'
    })

    const formattedText = formatText(testString, {
      color: 'blue',
      bold: true
    })
    expect(logSpy).toHaveBeenCalledWith(`🚀  ${formattedText}`)
  })

  test('should log the object with non changes', () => {
    const testObject = { key: 'value' }
    consoleStyler(testObject as any, {
      color: 'blue',
      bold: true,
      emojiStart: 'rocket'
    })

    expect(logSpy).toHaveBeenCalledWith(testObject)
  })

  test('should handle internal errors gracefully', async () => {
    const testString = 'Hello, World!'

    vi.spyOn(formatTextModule, 'formatText').mockImplementationOnce(() => {
      throw new Error('Internal formatting error')
    })

    consoleStyler(testString)

    const formattedText = formatText('Error: Internal formatting error', {
      color: 'red',
      emojiStart: 'warning'
    })

    expect(logSpy).toHaveBeenCalledWith(formattedText)
  })
})
