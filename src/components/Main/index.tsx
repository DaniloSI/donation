import items from '@/mocks/items';
import { range } from 'ramda';

import Item from '../Item';
import { Wrapper, GridItems } from './styles';

const Main = () => {
  const itemsMock = range(0, 25).map((number) => {
    const itemMock = items.at(number % items.length);

    return {
      id: `56528b15-1245-4894-af42-99e9150a23${number}`,
      imageName: itemMock?.imageName ?? '',
      title: itemMock?.title ?? '',
      price: 5
    };
  });

  return (
    <Wrapper>
      <GridItems>
        {itemsMock.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </GridItems>
    </Wrapper>
  );
};

export default Main;
