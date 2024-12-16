import { i18n } from './config';
import { person, social, newsletter, home, about, blog, work, gallery, admin } from './content';
import { createI18nContent } from './content-i18n';

export const renderContent = (t) => {
    // Check if `t` (translations function) is provided
    if (i18n && typeof t === 'function') {
        try {
            // Generate i18n content dynamically using `t`
            return createI18nContent(t);
        } catch (error) {
            console.error('Error generating i18n content:', error);
            throw new Error('Failed to generate i18n content.');
        }
    }

    // Fallback to static content if i18n is disabled or `t` is missing
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery,
        admin, // Admin content is included here
    };
};
