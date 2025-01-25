export const alignText = (
  text: string,
  alignment: 'left' | 'center' | 'right' = 'left'
): string => {
  const terminalWidth = process.stdout.columns || 80
  if (alignment === 'center') {
    const padding = Math.max(0, Math.floor((terminalWidth - text.length) / 2))
    return ' '.repeat(padding) + text
  }
  if (alignment === 'right') {
    const padding = Math.max(0, terminalWidth - text.length)
    return ' '.repeat(padding) + text
  }
  return text
}
