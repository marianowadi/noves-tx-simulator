export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const toHex = (value: string) =>
  Number(value).toString(16).padStart(2, '0')

export const shortAddress = (text: string): string =>
  text.substring(-1, 5) + '...' + text.substring(text.length - 5)
