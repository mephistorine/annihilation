import { Meta, Story } from '@storybook/angular/types-6-0'
import { AnniTableComponent } from './anni-table.component'
import { results } from '../../../../../../data/rickandmortyapi-com-api-character.json'
import { AnnihilationModule } from '../../annihilation.module'
import { CommonModule } from '@angular/common'

const tableComponent: Meta = {
  title: 'Components/Table',
  component: AnniTableComponent
}

export default tableComponent

const Template: Story<AnniTableComponent<any>> = (args: AnniTableComponent<any>) => ({
  component: AnniTableComponent,
  props: args,
  moduleMetadata: {
    imports: [
      AnnihilationModule,
      CommonModule
    ]
  },
  template: `
  <ni-table
    [rows]="rows"
    [columns]="columns"
    [isWrapCells]="isWrapCells"
  >
    <ng-container niColumnDef="id">
      <th class="table-cell" *niHeaderCellDef>🔑 ID</th>
      <td class="table-cell" *niCellDef="let row; key: columnKey">{{ row[ columnKey ] }}</td>
    </ng-container>

    <ng-container niColumnDef="created">
      <ng-template niCellDef let-row let-key="key">
        <td class="table-cell">{{ row[ key ] | date: 'HH:mm:ss dd.MM.YYYY' }}</td>
      </ng-template>
    </ng-container>
  </ni-table>`
})

export const basic: Story<AnniTableComponent<any>> = Template.bind({})
basic.args = {
  rows: results,
  columns: [
    'id',
    'name',
    'status',
    'species',
    'type',
    'gender',
    'created'
  ]
}

