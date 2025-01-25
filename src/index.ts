export * from './consoleLoader.js'
export * from './consoleStyler.js'
export * from './types.js'
export type * from './types.js'
import { consoleLoader } from './consoleLoader.js'
import { consoleStyler } from './consoleStyler.js'

const asyncFuntion = async () =>
  new Promise((res) => setTimeout(() => res('Success'), 15000))
console.log()

consoleLoader(asyncFuntion, {
  message: 'Making a request...',
  color: 'green',
  emojiStart: 'hourglass_not_done',
  bgColor: 'black',
  bold: true,
  emojiEnd: 'hourglass_done',
  loaderName: 'soccer'
})
  .then((res) => {
    const asyncFuntionRes = res
    consoleStyler('Success!', {
      color: 'green',
      emojiStart: 'check_mark_button'
    })
  })
  .catch((err) =>
    consoleStyler('Failed!', {
      color: 'red',
      emojiStart: 'cross_mark'
    })
  )
