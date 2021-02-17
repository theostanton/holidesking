import {createGlobalStyle} from 'styled-components'
import Head from 'next/head';
import {DESCRIPTION} from "./index";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, serif;
    background-color: #f7f1e0;
  }
`

export default function App({Component, pageProps}) {

    const title: string = "holidesking"
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
                <meta name="keywords" content="theo,stanton,holidesking,holi-desking,holi desking§  Ωxdsś1q"/>
                <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png"/>
                <script async defer data-domain="holidesking" src="https://plausible.io/js/plausible.js"/>
            </Head>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}
