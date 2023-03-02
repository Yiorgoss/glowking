import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import type { AppProps } from "next/app";

import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { initTranslation } from "@/utils/utils";

import type { PageWithHeaderLayout } from "@cTypes/layoutTypes";

type AppPropsWithLayout = AppProps & {
    Component: PageWithHeaderLayout;
};

initTranslation(i18n);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const router = useRouter();
    const locale = router.locale || router.defaultLocale!;
    const firstRender = useRef(true);

    // run only once on the first render (for server side)
    if (pageProps.translation && firstRender.current) {
        i18n.load(locale, pageProps.translation);
        i18n.activate(locale);
        firstRender.current = false;
    }

    // listen for the locale changes
    useEffect(() => {
        if (pageProps.translation) {
            i18n.load(locale, pageProps.translation);
            i18n.activate(locale);
        }
    }, [locale, pageProps.translation]);

    const getLayout = Component.getLayout || ((page) => page);
    return (
        <I18nProvider i18n={i18n}>
            {getLayout(<Component {...pageProps} />)}
        </I18nProvider>
    );
}
