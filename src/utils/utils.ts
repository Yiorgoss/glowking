import type { I18n, MessageDescriptor } from '@lingui/core';
import { en, el } from 'make-plural/plurals';

//anounce which locales we are going to use and connect them to approprite plural rules
export function initTranslation(i18n: I18n): void {
    i18n.loadLocaleData({
        en: { plurals: en },
        el: { plurals: el },
        pseudo: { plurals: en }
    });
}
export function isMessageDescriptor(prop: any) {
    //return typeof prop.type !== 'string'; // ReactElement SHOULD always have a type field
    return (prop as MessageDescriptor).message !== undefined;
}

export async function loadTranslation(locale: string, isProduction = true) {
    let data;
    if (isProduction) {
        data = await import(`@/translations/locales/${locale}/messages`);
    } else {
        data = await import(
            `@lingui/loader!@/translations/locales/${locale}/messages.po`
        );
    }
    return data.messages;
}
