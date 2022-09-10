import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalTheme from '@/components/GlobalTheme';
import GlobalStyles from '@/styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js - Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Simple Next.js boilerplate with lint-staged, husky, eslint + prettier, jest, commitlint + commitizen, next-pwa, storybook and styled-components."
        />
      </Head>

      <GlobalStyles />
      <GlobalTheme>
        <Component {...pageProps} />
      </GlobalTheme>
    </>
  );
}

export default App;
