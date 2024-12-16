import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: "Thomas",
        lastName: "Schustereit",
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role: t("person.role"),
        avatar: "/images/avatar.jpg",
        location: "America/Chicago",
        languages: ["English"],
    };

    const social = [
        { name: "GitHub", icon: "github", link: "https://github.com/bonesy512" },
        { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/b0n3syeth/" },
        { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/thomasmschustereit/" },
        { name: "X", icon: "x", link: "https://x.com/B0N3SYeth" },
        { name: "Email", icon: "email", link: "mailto:bonesy@bonesydesign.com" },
    ];

    const newsletter = {
        display: true,
        title: t("newsletter.title", { firstName: person.firstName }),
        description: t("newsletter.description"),
    };

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", {
            name: person.name,
            role: person.role,
            location: person.location,
        }),
    };

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", { name: person.name }),
    };

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", { name: person.name }),
    };

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", { name: person.name }),
    };

    const admin = {
        label: t("admin.label"),
        title: t("admin.title"),
        description: t("admin.description"),
    };

    return { person, social, newsletter, about, blog, work, gallery, admin };
};

// Export all content
export { createI18nContent };
