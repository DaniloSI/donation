import { Cloudinary } from '@cloudinary/url-gen';
import { vectorize } from '@cloudinary/url-gen/actions/effect';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dhuyu1mxv'
  }
});

export const transformedImage = (imageName: string) =>
  cld
    .image(`small-fair/${imageName}`)
    .resize(thumbnail().width(200).height(200))
    .format('webp');

export const imageBlurred = (imageName: string) =>
  transformedImage(imageName)
    .effect(vectorize().numOfColors(2).detailsLevel(0.05))
    .toURL();

export const image = (imageName: string) => transformedImage(imageName).toURL();
