import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { consoleLoader } from '../src/consoleLoader'
import { LoadersNames } from '../src/types.ts'
import { loaders } from '../src/data/loaders.ts'
import { formatText } from '../src/utils/formatText.ts'

const originalStdout = process.stdout.write
const originalClearLine = process.stdout.clearLine

beforeEach(() => {
  process.stdout.write = vi.fn() as any
  process.stdout.clearLine = vi.fn() as any
})

afterEach(() => {
  process.stdout.write = originalStdout
  process.stdout.clearLine = originalClearLine
})

describe('consoleLoader', () => {
  test('should throw an error if the funtion is not a Promise or async function', async () => {
    try {
      const result = await consoleLoader(syncFunction as any, {
        message: 'Loading...',
        finishMessage: 'should throw an error if '
      })
      expect(result).toBe(undefined)
    } catch (error) {
      expect(error.message).toBe('Task must be an async function or a Promise.')
    }
  })
  test('should throw an error if loader is not found', async () => {
    try {
      const result = await consoleLoader(asyncFunction, {
        loaderName: 'unknown' as LoadersNames
      })
      expect(result).toBe(undefined)
    } catch (error) {
      expect(error.message).toBe('Loader "unknown" not found.')
    }
  })

  test('should throw an error if the promise is rejected', async () => {
    try {
      const result = await consoleLoader(asyncFunctionFail)
      expect(result).toBe(undefined)
    } catch (error) {
      expect(error.message).toBe('Fail')
    }
  })

  test('should return result if the promise is resolved', async () => {
    try {
      const result = await consoleLoader(asyncFunction, {
        message: 'Loading...',
        finishMessage: 'should return result if the promise is resolved'
      })
      expect(result).toBe('Success')
    } catch (error) {
      expect(error.message).toBe(undefined)
    }
  })

  test('should handle promises correctly with not returning anything', async () => {
    await expect(
      consoleLoader(asyncFunction2, {
        message: 'info obtenida',
        finishMessage:
          'should handle promises correctly with not returning anything'
      })
    ).resolves.toBe(undefined)
  })

  test('should display the loader animation with formatted text', async () => {
    const writeSpy = vi.spyOn(process.stdout, 'write')
    const message = 'Loading...'
    const loaderName = 'dots'
    await consoleLoader(asyncFunction, {
      message: message,
      finishMessage: 'should display the loader animation with formatted text',
      loaderName: loaderName,
      color: 'green',
      bold: true
    })

    const calls = writeSpy.mock.calls.map((call) => call[0])

    const formattedMessage = formatText(
      `${loaders[loaderName][0]} ${message}`,
      {
        color: 'green',
        bold: true
      }
    )

    const containsFormattedText = calls.some((call) =>
      call.includes(formattedMessage as never)
    )
    expect(containsFormattedText).toBe(true)
    expect(writeSpy).toHaveBeenCalled()

    writeSpy.mockRestore()
  })
})

const syncFunction = () => 'Sync function'

const asyncFunction = async () =>
  new Promise((resolve, reject) => setTimeout(() => resolve('Success'), 1000))

const asyncFunctionFail = async () => {
  return new Promise((resolve, reject) => {
    reject(new Error('Fail'))
  })
}

const asyncFunction2 = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await data.json()
}
