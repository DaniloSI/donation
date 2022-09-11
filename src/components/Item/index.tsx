import { formatDecimal } from '@/utils/formatStrings';
import { DollarSign } from 'react-feather';

import ItemImage from '../ItemImage';
import {
  WrapperItem,
  WrapperImage,
  TitleItem,
  WrapperPricing,
  PricingText
} from './styles';

interface IItem {
  id: string;
  imageName: string;
  title: string;
  price: number;
}

type Props = {
  item: IItem;
};

const Item: React.FC<Props> = ({ item }) => {
  const { id, imageName, title, price } = item;
  const formattedPrice = formatDecimal(price);

  return (
    <WrapperItem key={id}>
      <WrapperImage>
        <ItemImage name={imageName} />
      </WrapperImage>
      <TitleItem>{title}</TitleItem>
      <WrapperPricing>
        <DollarSign size={16} />
        <PricingText>{formattedPrice}</PricingText>
      </WrapperPricing>
    </WrapperItem>
  );
};

export default Item;
