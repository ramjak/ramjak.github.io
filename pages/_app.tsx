import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { StyledEngineProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Rama Jakaria</title>
    </Head>
    <StyledEngineProvider injectFirst={false}>
      <Component {...pageProps} />
    </StyledEngineProvider>
  </>;
}

export default MyApp;
