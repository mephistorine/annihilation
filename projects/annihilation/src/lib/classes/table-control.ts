export interface Column {
  filters: ((item: any) => boolean)[] | null
  sort: ((a: any, b: any) => number) | null
}

type Dictionary = { [key in string]: any }

export function buildSeries(takeValue: (data: { [key: string]: any }) => any, data: Dictionary[]): any[] {
  const result: any[] = []

  for (const item of data) {
    result.push(takeValue(item))
  }

  return result
}

export function buildDataSet(data: Dictionary[], properties: string[]): Record<string, any> {
  const result: Record<string, any> = {}

  for (const property of properties) {
    result[ property ] = buildSeries((item: Dictionary) => item[ property ], data)
  }

  return result
}

export function tableProcess(data: Dictionary[], columns: Map<string, Column>): any {
  const indexes: Set<number> = new Set(data.map((_: Dictionary, index: number) => index))
  const dataset: Record<string, any> = buildDataSet(data, [ 'name', 'age', 'jobPosition', 'rank' ])

  for (const key in dataset) {
    const series: any[] = dataset[ key ]
    const column: Column | undefined = columns.get(key)
    if (typeof column !== 'undefined') {
      let i: number = 0
      for (const item of series) {
        const filterResult: boolean | undefined = column.filters?.every((filter: (item: any) => boolean) => filter(item))
        if (!filterResult) {
          indexes.delete(i)
        }
        i++
      }
    }
  }

  return Array.from(indexes.values()).map((index: number) => data[ index ])
}

const data: object[] = [
  {
    name: 'Sam',
    age: 20,
    jobPosition: 'Frontend developer',
    rank: 'Middle'
  },
  {
    name: 'Ilya',
    age: 22,
    jobPosition: 'Backend developer',
    rank: 'Middle'
  },
  {
    name: 'Alexandr',
    age: 35,
    jobPosition: 'Frontend developer',
    rank: 'Junior'
  },
  {
    name: 'Suren',
    age: 26,
    jobPosition: 'Backend developer',
    rank: 'Junior'
  },
  {
    name: 'Ivan',
    age: 29,
    jobPosition: 'Chief Technical Officer',
    rank: null
  }
]

const columns: Map<string, Column> = new Map<string, Column>()
  .set('rank', {
    filters: [

    ],
    sort: null
  })


/*
export class TableControl<T extends Record<string | number, unknown>> {
  constructor(private data: readonly T[],
              private columns: Column<unknown>[]) {
  }

  public calculate(): void {

  }
}

interface SeriesRepresentation<R, T> {
  key: R
  value: T[]
}

export function buildDataset<T extends Record<string, unknown>, R extends keyof T>(data: readonly T[]): Map<R, T[ R ][]> {
  const result: Map<R, T[ R ][]> = new Map()

  for (const item of data) {
    for (const itemKey in item) {
      if (result.has(itemKey)) {
        result.get(itemKey)?.push(item[ itemKey ])
        continue
      }

      result.set(itemKey, [])
    }
  }

  return result
}
*/
