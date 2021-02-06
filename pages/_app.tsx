import {createGlobalStyle} from 'styled-components'
import Head from 'next/head';
import {DESCRIPTION} from "./index";

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

    const title: string = "Holidesking"
    const site: string = "https://holidesking.com"
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={DESCRIPTION}/>
                <meta property="og:type" content="website"/>
                <meta name="og:title" property="og:title" content={title}/>
                <meta name="og:description" property="og:description" content={DESCRIPTION}/>
                <meta property="og:site_name" content={title}/>
                <meta property="og:url" content={site}/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={DESCRIPTION}/>
                <meta name="twitter:site" content={site}/>
                <meta name="twitter:creator" content="Theo Stanton"/>
            </Head>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}
