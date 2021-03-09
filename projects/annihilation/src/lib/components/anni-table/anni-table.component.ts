import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'ni-table',
  templateUrl: './anni-table.component.html',
  styleUrls: [ './anni-table.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnniTableComponent implements OnInit {

  @Input()
  public hello: string | undefined

  constructor() {
    console.log('hi')
  }

  ngOnInit(): void {
  }

}
