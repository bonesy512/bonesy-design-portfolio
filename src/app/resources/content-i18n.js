import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: "Thomas",
    lastName: "Schustereit",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Graphic Designer",
    avatar: "/images/avatar.jpg",
    location: "America/Chicago",
    languages: ["English"],
};

const newsletter = {
    display: true,
    title: `Subscribe to ${person.firstName}'s Newsletter`,
    description: "I occasionally write about design, technology, and share thoughts on the intersection of creativity and AI.",
};

const social = [
    { name: "GitHub", icon: "github", link: "https://github.com/bonesy512" },
    { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/b0n3syeth/" },
    { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/thomasmschustereit/" },
    { name: "X", icon: "x", link: "https://x.com/B0N3SYeth" },
    { name: "Email", icon: "email", link: "mailto:bonesy@bonesydesign.com" },
];

const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `${person.name}'s portfolio showcasing his work at Bonesy Design.`,
    headline: "Bonesy Design",
    subline: (
        <>
            I'm {person.name}, the creative force behind <InlineCode>Bonesy Design</InlineCode>.
            I specialize in crafting seamless user experiences and bringing innovative ideas to life.
        </>
    ),
};

const about = {
    label: "About",
    title: "About Me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}.`,
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { display: true, link: "https://cal.com" },
    intro: {
        display: true,
        title: "Introduction",
        description: `${person.name} is a graphic designer driven by a passion for intuitive design solutions.`,
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "Bonesy Design",
                timeframe: "September 2014 - Present",
                role: "Founder & Lead Designer",
                achievements: [
                    "Founded Bonesy Design to deliver creative solutions in UI/UX, branding, and web development.",
                    "Collaborated with clients to create functional and visually appealing digital experiences.",
                    "Specialized in building seamless user interfaces across web and mobile platforms.",
                ],
                images: [{ src: "/images/work/BonesyDesign.png", alt: "Bonesy Design Logotype", width: 16, height: 9 }],
            },
            {
                company: "Certified Tree Care LLC",
                timeframe: "March 2012 - June 2024",
                role: "Chief Development Officer",
                achievements: [
                    "Led IT initiatives, enhancing operational efficiencies and digital transformation.",
                    "Implemented CRM and Actsoft systems, increasing efficiency by 20%.",
                ],
                images: [{ src: "/images/work/ctclogo.png", alt: "Certified Tree Care Logo", width: 16, height: 9 }],
            },
        ],
    },
    studies: {
        display: false,
        title: "Studies",
        institutions: [
            { name: "University of Jakarta", description: "Studied software engineering." },
            { name: "Build the Future", description: "Studied online marketing and personal branding." },
        ],
    },
    technical: {
        display: true,
        title: "Technical Skills",
        skills: [
            {
                title: "Figma",
                description: "Proficient in prototyping and leveraging Figma for UI/UX design.",
                images: [{ src: "/images/projects/project-01/cover-02.jpg", alt: "Figma Project", width: 16, height: 9 }],
            },
        ],
    },
};

const blog = {
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently.`,
};

const work = {
    label: "Work",
    title: "My Projects",
    description: `Explore design and dev projects by ${person.name}.`,
};

const gallery = {
    label: "Gallery",
    title: "My Photo Gallery",
    description: `A curated collection of photos by ${person.name}.`,
};

const admin = {
    label: "Admin",
    title: "Admin Dashboard",
    description: "Manage and monitor your projects.",
    sections: [
        { title: "Live Trade Insights", description: "Track trading updates and key performance metrics." },
        { title: "Market Sentiment", description: "Analyze sentiment trends from financial news." },
        { title: "Alerts", description: "Receive notifications for opportunities." },
    ],
};

// Export structured content for i18n compatibility
export const createI18nContent = (t) => ({
    person,
    newsletter,
    social,
    home: {
        label: t("home.label"),
        title: t("home.title", { name: person.name }),
        description: t("home.description", { role: person.role }),
    },
    about: {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description", { name: person.name, role: person.role, location: person.location }),
    },
    blog: {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", { name: person.name }),
    },
    work: {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", { name: person.name }),
    },
    gallery: {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", { name: person.name }),
    },
    admin,
});
