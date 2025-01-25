export const capitalizeText = (str: string): string =>
  str.replace(/\b\w/g, (char) => char.toUpperCase())
