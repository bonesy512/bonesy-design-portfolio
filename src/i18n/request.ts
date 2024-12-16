import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
    try {
        // Validate that the incoming `locale` parameter is valid
        if (!routing.locales.includes(locale as any)) {
            notFound();
        }

        // Dynamically import the locale messages
        const messages = await import(`../../messages/${locale}.json`);
        
        return {
            messages: messages.default
        };
    } catch (error) {
        console.error(`Error loading messages for locale: ${locale}`, error);
        notFound();
    }
});
