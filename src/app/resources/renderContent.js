import { person, social, newsletter, about, blog, work, gallery, admin } from './content';
import { createI18nContent } from './content-i18n';

export const renderContent = (t) => {
    if (t) {
        return createI18nContent(t);
    } else {
        return { person, social, newsletter, about, blog, work, gallery, admin };
    }
};
