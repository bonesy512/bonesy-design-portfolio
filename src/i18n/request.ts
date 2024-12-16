import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = requestLocale;

    // Ensure the locale is valid
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    try {
        const messages = (await import(`../../messages/${locale}.json`)).default;
        return { locale, messages };
    } catch (error) {
        console.error(`Failed to load messages for locale ${locale}:`, error);
        throw new Error(`Could not load messages for locale ${locale}`);
    }
});
