import { getRelativeCalendar } from '@/utils/formatDate';
import { formatDecimal } from '@/utils/formatStrings';
import { DollarSign } from 'react-feather';

import ItemImage from '../ItemImage';
import {
  WrapperItem,
  WrapperImage,
  TitleItem,
  WrapperPricing,
  PricingText,
  DateCreated
} from './styles';

interface IItem {
  id: string;
  imageName: string;
  title: string;
  price: number;
  dateCreated: string;
}

type Props = {
  item: IItem;
};

const Item: React.FC<Props> = ({ item }) => {
  const { id, imageName, title, price, dateCreated } = item;
  const formattedPrice = formatDecimal(price);
  const formattedDate = getRelativeCalendar(dateCreated);

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
      <DateCreated>{formattedDate}</DateCreated>
    </WrapperItem>
  );
};

export default Item;
