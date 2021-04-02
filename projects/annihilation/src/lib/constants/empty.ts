import { QueryList } from '@angular/core'

/**
 * For type safety when using @ContentChildren and @ViewChildren
 *
 * NOTE: Be careful subscribing to 'changes'
 */
export function takeEmptyQueryList<T>(): QueryList<T> {
  return new QueryList<T>()
}
