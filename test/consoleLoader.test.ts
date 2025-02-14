import { describe, expect, test, vi } from 'vitest'
import { consoleLoader } from '../src/consoleLoader'
import { formatText } from '../src/utils/formatText'
import { loaders } from '../src/data/loaders'
import { LoadersNames } from '../src/types.ts'

const asyncFunction = async () =>
  new Promise((resolve, reject) => setTimeout(() => resolve('Success'), 1000))

const asyncFunction2 = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await data.json()
  console.log(json)
}
const asyncFunctionFail = async () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Fail')), 1000)
  )

const syncFunction = () => 'Sync function'

describe('consoleLoader', () => {
  test('should throw an error if task is not an async function', async () => {
    await expect(consoleLoader(syncFunction as any)).rejects.toThrowError(
      'Task must be an async function or a Promise.'
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

  test('should handle promises correctly with not returning anything', async () => {
    await expect(consoleLoader(asyncFunction2())).resolves.toBe(undefined)
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

import path from 'node:path'
import fs from 'fs/promises'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copyTemplate = async (
  language: 'JavaScript' | 'TypeScript',
  template: string,
  destDir: string
): Promise<void> => {
  try {
    let templateFolder = ''
    let templateLenguage = ''
    const templateApiAndFrontend = template === 'expressApi + Frontend'

    if (template === 'blank') {
      templateFolder = 'blank'
    }
    if (template === 'expressApi' || templateApiAndFrontend) {
      templateFolder = 'api'
    }
    if (language === 'TypeScript') {
      templateLenguage = 'typescript'
    }
    if (language === 'JavaScript') {
      templateLenguage = 'javascript'
    }
    const srcDir = path.join(
      __dirname,
      '..',
      '..',
      'templates',
      templateFolder,
      templateLenguage
    )

    const entries = await fs.readdir(srcDir, { withFileTypes: true })
    let skippedPublic = false

    for (const entry of entries) {
      const srcPath = path.join(srcDir, entry.name)
      const destPath = path.join(destDir, entry.name)
      if (templateApiAndFrontend && entry.name === 'public') {
        skippedPublic = true
        continue
      }
      await fs.cp(srcPath, destPath, { recursive: true })
    }
    if (skippedPublic) {
      const appFilePath = path.join(
        destDir,
        'src',
        'app',
        `${language === 'JavaScript' ? 'app.js' : 'app.ts'}`
      )
      await updateTemplateFilesToVite(appFilePath, language)
    }
  } catch (error) {
    throw new Error('Error copying files.')
  }
}

const updateTemplateFilesToVite = async (
  appFilePath: string,
  language: 'JavaScript' | 'TypeScript'
) => {
  try {
    let appFileContent = await fs.readFile(appFilePath, 'utf8')

    const expressStaticLine = `// app.use(express.static(path.resolve('./public/dist')));`

    const expressError404Line = `// app.get('*', ${
      language === 'JavaScript' ? '(req, res)' : '(req: Request, res: Response)'
    } => {
// res.sendFile(path.resolve('./public/dist/index.html'));
// })`

    let lines = appFileContent.split('\n')
    lines = lines.map((line) => {
      if (line.includes('express.static')) {
        return line.replace(line, expressStaticLine)
      }
      if (line.includes("app.use('*',")) {
        return line.replace(line, expressError404Line)
      }
      if (line.includes('404.html')) {
        return line.replace(line, '')
      }
      if (line.includes('})')) {
        return line.replace(line, '')
      }
      return line
    })

    appFileContent = lines.join('\n')

    await fs.writeFile(appFilePath, appFileContent, 'utf8')
  } catch (error) {
    console.log(error)
    throw new Error('Error modifying app file.')
  }
}
