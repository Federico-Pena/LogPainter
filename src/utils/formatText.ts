import { bgColors, textColors } from '../data/colors.js'
import { FormatText } from '../types.js'
import { capitalizeText } from './capitalizeText.js'

export const formatText: FormatText = (data = '', options = {}) => {
  const {
    color = 'white',
    bold = false,
    bgColor = null,
    capitalize = false
  } = options

  data = String(data)

  if (capitalize) {
    data = capitalizeText(data)
  }

  const textColorCode = textColors[color] ?? 37
  const bgColorCode = bgColor !== null ? bgColors[bgColor] : null

  let styleCode = `\x1b[${textColorCode}m`
  if (bgColorCode) styleCode += `\x1b[${bgColorCode}m`
  if (bold) styleCode += '\x1b[1m'

  const resetCode = '\x1b[0m'
  let formattedText = `${styleCode}${data}${resetCode}`

  return formattedText
}
