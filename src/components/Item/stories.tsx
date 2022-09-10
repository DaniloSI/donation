import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Item from '.';

export default {
  title: 'Item',
  component: Item
} as ComponentMeta<typeof Item>;

const itemExample = {
  id: `56528b15-1245-4894-af42-99e9150a23${1}`,
  imageUrl:
    'https://res.cloudinary.com/dhuyu1mxv/image/upload/v1661728155/donation/lucia-macedo-d9_2kPJBG0U-unsplash_ldomaw.jpg',
  title: 'Bicicleta',
  pricing: 15_356.35
};

export const Basic: ComponentStory<typeof Item> = () => (
  <Item item={itemExample} />
);
