import { convertToColumnBased } from './table'

describe(`convertToColumnBased`, () => {
  it(`should build`, () => {
    const result = convertToColumnBased([
      {
        name: 'Sam',
        age: 20
      },
      {
        name: 'Sam',
        age: 50
      },
      {
        name: 'Sam',
        age: 42
      },
      {
        name: 'Sam',
        age: 10
      },
      {
        name: 'Sam',
        age: 6
      },
      {
        name: 'Ivan',
        age: 29
      },
      {
        name: 'Suren',
        age: 26
      },
      {
        name: 'Ilya',
        age: 23
      },
      {
        name: 'Alex',
        age: 35
      }
    ])

  })
})
