import { describe, expect, test, vi } from 'vitest'
import { consoleLoader } from '../src/consoleLoader'
import { formatText } from '../src/utils/formatText'
import { loaders } from '../src/data/loaders'
import { LoadersNames } from '../src/types.ts'

const asyncFunction = async () =>
  new Promise((resolve, reject) => setTimeout(() => resolve('Success'), 1000))

const asyncFunctionFail = async () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Fail')), 1000)
  )

const syncFunction = () => 'Sync function'

describe('consoleLoader', () => {
  test('should throw an error if task is not an async function', async () => {
    await expect(consoleLoader(syncFunction as any)).rejects.toThrowError(
      'Task must be an async function.'
    )
  })

  test('should throw an error if loader is not found', async () => {
    await expect(
      consoleLoader(asyncFunction, { loaderName: 'unknown' as LoadersNames })
    ).rejects.toThrowError('Loader "unknown" not found.')
  })

  test('should throw an error if the promise is rejected', async () => {
    await expect(consoleLoader(asyncFunctionFail)).rejects.toThrowError('Fail')
  })

  test('should return result if the promise is resolved', async () => {
    await expect(consoleLoader(asyncFunction)).resolves.toBe('Success')
  })

  test('should display the loader animation with formatted text', async () => {
    const message = 'Loading...'
    const loaderName = 'dots'

    const writeSpy = vi.spyOn(process.stdout, 'write')

    await consoleLoader(asyncFunction, {
      message,
      loaderName,
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
