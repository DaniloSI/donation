import { Story, Meta } from '@storybook/react/types-6-0';

import Main from '.';
import GlobalTheme from '../GlobalTheme';

export default {
  title: 'Main',
  component: Main
} as Meta;

export const Basic: Story = (args) => (
  <GlobalTheme>
    <Main {...args} />
  </GlobalTheme>
);
