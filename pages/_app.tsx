import {createGlobalStyle} from 'styled-components'
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    margin: 0;
    padding: 64px;
    box-sizing: border-box;
    color: #000000EE;
    font-family: Arial, serif;
  }
`

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Holidesking</title>
            </Head>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}
