import { FilterRule } from './filter-rule'
import { SortRule } from './sort-rule'

export abstract class Column<T> {
  constructor(private sortRule: SortRule | null = null,
              private filterRules: FilterRule[] = []) {
  }

  public calculate(series: T[]) {
    return series.map((seriesItem: T, index: number, initialArray: T[]) => {
      return {
        value: seriesItem,
        filtersMatch: this.filterRules.every((filter: FilterRule) => filter.match(seriesItem)),
        sortResult: this.sortRule === null ? null : this.sortRule.compare(seriesItem, initialArray[ index + 1 ])
      }
    })
  }
}
