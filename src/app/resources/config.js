const baseURL = 'bonesydesign.com';

// Enable localization (set `true` to activate i18n)
const i18n = true; // Enable i18n to support internationalization

// Manage localized content in the `messages` folder
const i18nOptions = {
    locales: ['en'], // List of supported locales, e.g., ['en', 'id']
    defaultLocale: 'en', // Default locale and fallback
};

// Define routes for the application
const routes = {
    '/': true, // Home page
    '/about': true, // About page
    '/work': true, // Work/projects page
    '/blog': true, // Blog page
    '/gallery': true, // Gallery page
    '/admin': true, // Admin page (protected)
};

// Enable password protection for specific routes
// Set the password in `/pages/api/authenticate.ts`
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true,
};

// Configure background and visual effects
const effects = {
    mask: 'cursor', // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true, // Enable gradient effect
        opacity: 0.4, // Opacity level (0 - 1)
    },
    dots: {
        display: true, // Enable dots effect
        opacity: 0.4, // Opacity level (0 - 1)
        size: '24', // Dot sizes: 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64
    },
    lines: {
        display: false, // Enable or disable lines effect
    },
};

// Style configurations for themes and design
const style = {
    theme: 'dark', // dark | light
    neutral: 'gray', // sand | gray | slate
    brand: 'blue', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: 'indigo', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: 'contrast', // color | contrast
    solidStyle: 'flat', // flat | plastic
    border: 'playful', // rounded | playful | conservative
    surface: 'translucent', // filled | translucent
    transition: 'all', // all | micro | macro
};

// Display options for UI
const display = {
    location: true, // Show or hide location
    time: true, // Show or hide time
};

// Configuration for Mailchimp integration
const mailchimp = {
    action:
        'https://bonesydesign.us11.list-manage.com/subscribe/post?u=e7ad1ec1e95ae18832f487a41&amp;id=7182cbf5d5&amp;f_id=00f1c2e1f0',
    effects: {
        mask: 'topRight', // none | cursor | topLeft | topRight | bottomLeft | bottomRight
        gradient: {
            display: true,
            opacity: 0.6, // Opacity level (0 - 1)
        },
        dots: {
            display: false,
        },
        lines: {
            display: false,
        },
    },
};

// Export configurations
export {
    routes,
    protectedRoutes,
    effects,
    style,
    display,
    mailchimp,
    baseURL,
    i18n,
    i18nOptions,
};
