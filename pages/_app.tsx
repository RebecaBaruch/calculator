import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyle'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
