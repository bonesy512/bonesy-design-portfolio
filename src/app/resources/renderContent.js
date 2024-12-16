import { i18n } from './config';
import { person, social, newsletter, home, about, blog, work, gallery, admin } from './content';
import { createI18nContent } from './content-i18n';

export const renderContent = (t) => {
    if (i18n) {
        return createI18nContent(t);
    } else {
        return {
            person,
            social,
            newsletter,
            home,
            about,
            blog,
            work,
            gallery,
            admin, // Add Admin content here
        };
    }
};
