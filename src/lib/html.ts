const entities: Record<string, string> = {
  amp: '&',
  apos: "'",
  hellip: '...',
  mdash: '-',
  ndash: '-',
  nbsp: ' ',
  quot: '"',
  rsquo: "'",
}

export function decodeHtml(value = '') {
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/&([a-z]+);/gi, (_, entity: string) => entities[entity] ?? entity)
    .trim()
}
