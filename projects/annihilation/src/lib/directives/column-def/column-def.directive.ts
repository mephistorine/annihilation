import { ContentChild, Directive, Input } from '@angular/core'

import { HeaderCellDefDirective } from '../header-cell-def/header-cell-def.directive'
import { CellDefDirective } from '../cell-def/cell-def.directive'

@Directive({
  selector: '[niColumnDef]'
})
export class ColumnDefDirective<T> {

  @ContentChild(CellDefDirective)
  public readonly cellColumnDef: CellDefDirective<T> | undefined

  @ContentChild(HeaderCellDefDirective)
  public readonly headerCellColumnDef: HeaderCellDefDirective<string> | undefined

  @Input('niColumnDef')
  public propName: string | undefined

  constructor() {
  }

}
