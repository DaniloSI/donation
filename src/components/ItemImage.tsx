import Image from 'next/image';

import { image, imageBlurred } from '@/utils/cloudinary';
import { getBase64ImageUrl } from '@/utils/image';
import { useEffect, useState } from 'react';

type Props = {
  name: string;
};

const ItemImage: React.FC<Props> = ({ name }) => {
  const imageUrl = image(name);
  const [blurDataURL, setBlurDataURL] = useState<string>();

  useEffect(() => {
    const imageUrlBlur = imageBlurred(name);
    getBase64ImageUrl(imageUrlBlur).then(setBlurDataURL);
  }, [name]);

  return blurDataURL ? (
    <Image
      src={imageUrl}
      placeholder="blur"
      blurDataURL={blurDataURL}
      layout="fill"
      objectFit="cover"
    />
  ) : null;
};

export default ItemImage;
