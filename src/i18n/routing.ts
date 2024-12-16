import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { i18nOptions } from '@/app/resources/config';

// Ensure i18nOptions are configured correctly
if (!i18nOptions?.locales || !Array.isArray(i18nOptions.locales) || !i18nOptions.defaultLocale) {
    throw new Error(
        'i18nOptions is not properly configured. Ensure it includes a "locales" array and a "defaultLocale" string.'
    );
}

// Define routing configuration
export const routing = defineRouting({
    locales: i18nOptions.locales,
    defaultLocale: i18nOptions.defaultLocale,
    localePrefix: 'as-needed', // 'as-needed' hides the defaultLocale in the URL
    // 'always' shows the defaultLocale in the URL
});

export type Locale = (typeof routing.locales)[number];

// Create lightweight navigation utilities
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
