import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes"


type AppPropsWithLayout = AppProps & {
    Component: PageWithHeaderLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page)
    return (
        getLayout(<Component {...pageProps} />)
    )
}
