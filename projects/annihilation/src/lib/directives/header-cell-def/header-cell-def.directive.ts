import { Directive, TemplateRef } from '@angular/core'
import { ImplicitContext } from '../../interfeces'

@Directive({
  selector: '[niHeaderCellDef]'
})
export class HeaderCellDefDirective<T> {
  constructor(public templateRef: TemplateRef<ImplicitContext<T>>) {
  }

}
