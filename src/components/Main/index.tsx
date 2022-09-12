import { getMockedItems } from '@/mocks/utils';
import { prop, sort, descend } from 'ramda';

import Item from '../Item';
import { Wrapper, GridItems } from './styles';

const Main = () => {
  const itemsMock = sort(descend(prop('dateCreated')), getMockedItems(25));

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
