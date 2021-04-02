import { NgModule, Pipe, PipeTransform } from '@angular/core'
import { CommonModule } from '@angular/common'

// todo Add index.ts file for diretives
import { AnniTableComponent } from './components/anni-table/anni-table.component'
import { ColumnDefDirective } from './directives/column-def/column-def.directive'
import { HeaderCellDefDirective } from './directives/header-cell-def/header-cell-def.directive'
import { RowDefDirective } from './directives/row-def/row-def.directive'
import { CellDefDirective } from './directives/cell-def/cell-def.directive'

@Pipe({
  name: 'debug'
})
export class DebugDirective implements PipeTransform {
  public transform(value: any, ...args: any[]): any {
    console.log(value)
    return value
  }
}

@NgModule({
  imports: [ CommonModule ],
  declarations: [ AnniTableComponent, ColumnDefDirective, HeaderCellDefDirective, CellDefDirective, RowDefDirective, DebugDirective ],
  exports: [ AnniTableComponent, ColumnDefDirective, HeaderCellDefDirective, CellDefDirective, RowDefDirective ]
})
export class AnnihilationModule {
}
