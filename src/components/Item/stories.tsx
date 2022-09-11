import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Item from '.';

export default {
  title: 'Item',
  component: Item
} as ComponentMeta<typeof Item>;

const itemExample = {
  id: `56528b15-1245-4894-af42-99e9150a23${1}`,
  imageName: 'notebook',
  title: 'Mac Book Apple M1',
  price: 15_356.35
};

export const Basic: ComponentStory<typeof Item> = () => (
  <Item item={itemExample} />
);
