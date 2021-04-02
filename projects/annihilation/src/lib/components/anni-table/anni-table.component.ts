import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core'
import { ColumnDefDirective } from '../../directives/column-def/column-def.directive'
import { takeEmptyQueryList } from '../../constants'
import { map, startWith } from 'rxjs/operators'
import { defer, Observable } from 'rxjs'
import { HeaderCellDefDirective } from '../../directives/header-cell-def/header-cell-def.directive'
import { CellDefDirective } from '../../directives/cell-def/cell-def.directive'

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
    })
  ))

  public tableCells: Observable<Record<string, CellDefDirective<T> | undefined>> = defer(() => this.cellColumnDefs.changes.pipe(
    startWith(this.cellColumnDefs),
    map((cellColumnDefs: QueryList<ColumnDefDirective<T>>) => {
      return cellColumnDefs.reduce((record: Record<string, CellDefDirective<T> | undefined>, cellColumnDef: ColumnDefDirective<T>) => {
        if (typeof cellColumnDef.propName === 'undefined') {
          return record
        }

        return {
          ...record,
          [ cellColumnDef.propName ]: cellColumnDef.cellColumnDef
        }
      }, {})
    })
  ))

  constructor() {
  }

}
