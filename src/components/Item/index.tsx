import Image from 'next/image';

import { formatDecimal } from '@/utils/formatStrings';
import { DollarSign } from 'react-feather';

import {
  WrapperItem,
  WrapperImage,
  TitleItem,
  WrapperPricing,
  PricingText
} from './styles';

interface IItem {
  id: string;
  imageUrl: string;
  title: string;
  pricing: number;
}

type Props = {
  item: IItem;
};

const Item: React.FC<Props> = ({ item }) => {
  const { id, imageUrl, title, pricing } = item;

  const formattedPrice = formatDecimal(pricing);

  return (
    <WrapperItem key={id}>
      <WrapperImage>
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </WrapperImage>
      <TitleItem>{title}</TitleItem>
      <WrapperPricing>
        <DollarSign size={18} />
        <PricingText>{formattedPrice}</PricingText>
      </WrapperPricing>
    </WrapperItem>
  );
};

export default Item;
