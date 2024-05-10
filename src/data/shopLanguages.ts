import { ILanguage } from '~/interfaces/language';

const dataShopLanguages: ILanguage[] = [
    {
        locale: 'en',
        code: 'en',
        name: 'English',
        icon: '/images/languages/english.svg',
        direction: 'ltr',
    },
    {
        locale: 'ru',
        code: 'ru',
        name: 'Russian',
        icon: '/images/languages/russian.svg',
        direction: 'ltr',
    },
    {
        locale: 'th',
        code: 'th',
        name: 'Thai',
        icon: '/images/languages/thai.svg',
        direction: 'ltr',
    },
    {
        locale: 'ar',
        code: 'ar',
        name: 'RTL',
        icon: '/images/languages/arab.svg',
        direction: 'rtl',
    },
];

export const dataShopDefaultLocale = 'en';

export default dataShopLanguages;
