import { Meta, Story } from '@storybook/angular/types-6-0'
import { AnniTableComponent } from './anni-table.component'
import { results } from '../../../../../../data/rickandmortyapi-com-api-character.json'
import { AnnihilationModule } from '../../annihilation.module'

const tableComponent: Meta = {
  title: 'Components/Table',
  component: AnniTableComponent
}

export default tableComponent

const Template: Story<AnniTableComponent<any>> = (args: AnniTableComponent<any>) => ({
  component: AnniTableComponent,
  props: args,
  moduleMetadata: {
    imports: [ AnnihilationModule ]
  },
  template: `<ni-table [rows]="rows" [columns]="columns" [isWrapCells]="isWrapCells">
    <ng-container niColumnDef="id">
      <ng-container *niHeaderCellDef>
        <th class="table-cell">ID</th>
      </ng-container>
      <ng-container *niCellDef>hello</ng-container>
    </ng-container>
  </ni-table>`
})

export const main: Story<AnniTableComponent<any>> = Template.bind({})
main.args = {
  rows: results,
  columns: [
    'id',
    'name',
    'status',
    'species',
    'type',
    'gender'
  ]
}
