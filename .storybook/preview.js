import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';

import GlobalStyles from '../src/styles/global';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
};
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];

const OriginalNextImage = NextImage.default;

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
});
