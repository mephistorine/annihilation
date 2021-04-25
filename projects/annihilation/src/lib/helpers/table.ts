export function convertToColumnBased<T>(data: T[]): Map<keyof T, any[]> {
  const result: Map<keyof T, any[]> = new Map()

  for (const item of data) {
    for (const itemKey in item) {
      if (!result.has(itemKey)) {
        result.set(itemKey, [])
      }

      if (result.has(itemKey)) {
        result.get(itemKey)?.push(item[ itemKey ])
      }
    }
  }

  return result
}
