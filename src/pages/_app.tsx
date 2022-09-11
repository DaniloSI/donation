import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalTheme from '@/components/GlobalTheme';
import GlobalStyles from '@/styles/global';

function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        <title>Small Fair</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Simple small fair." />
      </Head>

      <GlobalStyles />
      <GlobalTheme>
        <AnyComponent {...pageProps} />
      </GlobalTheme>
    </>
  );
}

export default App;
