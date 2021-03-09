import { Meta, Story } from '@storybook/angular/types-6-0'
import { AnniTableComponent } from './anni-table.component'

export default {
  title: 'Components/Table',
  component: AnniTableComponent,
  argTypes: {
    hello: {
      control: 'text'
    }
  }
} as Meta

const Template: Story<AnniTableComponent> = (args: AnniTableComponent) => ({
  component: AnniTableComponent,
  props: args
})

export const test: any = Template.bind({})
test.args = {
  hello: 'hi'
}
test.paramerts = {
  docs: {
    source: {
      code: `Hello`
    }
  }
}
