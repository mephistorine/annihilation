import { Directive, Input, TemplateRef } from '@angular/core'

@Directive({
  selector: '[niRowDef]'
})
export class RowDefDirective<T> {

  @Input()
  public niRowDefOf: readonly T[] = []

  constructor(public readonly template: TemplateRef<T>) { }

}
