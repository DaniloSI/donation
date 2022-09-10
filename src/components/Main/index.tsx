import { range } from 'ramda';

import Item from '../Item';
import { Wrapper, GridItems } from './styles';

const imageUrl =
  'https://res.cloudinary.com/dhuyu1mxv/image/upload/v1661728155/donation/lucia-macedo-d9_2kPJBG0U-unsplash_ldomaw.jpg';

const Main = () => {
  const itemsMock = range(1, 25).map((number) => ({
    id: `56528b15-1245-4894-af42-99e9150a23${number}`,
    imageUrl,
    title: 'Bicicleta',
    pricing: 15_356.35
  }));

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
