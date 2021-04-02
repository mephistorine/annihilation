import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core'
import { ColumnDefDirective } from '../../directives/column-def/column-def.directive'
import { takeEmptyQueryList } from '../../constants'
import { map, startWith, tap } from 'rxjs/operators'
import { defer, Observable } from 'rxjs'
import { HeaderCellDefDirective } from '../../directives/header-cell-def/header-cell-def.directive'

@Component({
  selector: 'ni-table',
  templateUrl: './anni-table.component.html',
  styleUrls: [ './anni-table.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AnniTableComponent<T> {

  @ContentChildren(ColumnDefDirective)
  public cellColumnDefs: QueryList<ColumnDefDirective<T>> = takeEmptyQueryList()

  @Input()
  public rows: ReadonlyArray<T> = []

  @Input()
  public columns: ReadonlyArray<keyof T | string> = []

  @Input()
  public isWrapCells: boolean = true

  public headers: Observable<Record<string, ColumnDefDirective<T>>> = defer(() => this.cellColumnDefs.changes.pipe(
    startWith(null),
    map(() => {
      return this.cellColumnDefs.reduce<Record<string, ColumnDefDirective<T>>>((record: Record<string, ColumnDefDirective<T>>, item: ColumnDefDirective<T>) => {
        if (typeof item.propName === 'undefined') {
          return record
        }

        return {
          ...record,
          [ item.propName ]: item
        }
      }, {})
    }),
    tap((data) => console.log(data))
  ))

  public tableHeaders: Observable<Record<string, HeaderCellDefDirective<string> | undefined>> = defer(() => this.cellColumnDefs.changes.pipe(
    startWith(this.cellColumnDefs),
    map((cellColumnDefs: QueryList<ColumnDefDirective<T>>) => {
      return cellColumnDefs.reduce((record: Record<string, HeaderCellDefDirective<string> | undefined>, cellColumnDef: ColumnDefDirective<T>) => {
        if (typeof cellColumnDef.propName === 'undefined') {
          return record
        }

        return {
          ...record,
          [ cellColumnDef.propName ]: cellColumnDef.headerCellColumnDef
        }
      }, {})
    }),
    tap((data) => console.log(data))
  ))

  constructor() {
  }

}
