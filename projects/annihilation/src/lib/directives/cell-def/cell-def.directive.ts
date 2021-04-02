import { Directive, TemplateRef } from '@angular/core'
import { ImplicitContext } from '../../interfeces'

@Directive({
  selector: '[niCellDef]'
})
export class CellDefDirective<T> {

  constructor(public templateRef: TemplateRef<ImplicitContext<T>>) { }

}
