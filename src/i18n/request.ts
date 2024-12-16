import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as any)) {
        console.error(`Invalid locale detected: ${locale}`);
        notFound(); // Return a 404 if the locale is invalid
    }

    try {
        // Attempt to load the messages for the requested locale
        const messages = (await import(`../../messages/${locale}.json`)).default;

        // Log success for debugging purposes
        console.log(`Successfully loaded messages for locale: ${locale}`);
        return {
            messages,
        };
    } catch (error) {
        // Log error for easier debugging
        console.error(`Failed to load messages for locale "${locale}":`, error.message);
        
        // Return a descriptive error for better developer experience
        throw new Error(`Could not load messages for locale "${locale}". Please ensure the corresponding JSON file exists and is valid.`);
    }
});
