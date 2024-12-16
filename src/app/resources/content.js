import { InlineCode } from "@/once-ui/components";

// Define person details
const person = {
    firstName: "Thomas",
    lastName: "Schustereit",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Graphic Designer",
    avatar: "/images/avatar.jpg",
    location: "America/Chicago", // IANA time zone identifier
    languages: ["English"], // Leave empty if not needed
};

// Newsletter configuration
const newsletter = {
    display: true,
    title: `Subscribe to ${person.firstName}'s Newsletter`,
    description:
        "I occasionally write about design, technology, and share thoughts on the intersection of creativity and AI.",
};

// Social links
const social = [
    { name: "GitHub", icon: "github", link: "https://github.com/bonesy512" },
    { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/b0n3syeth/" },
    { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/thomasmschustereit/" },
    { name: "X", icon: "x", link: "https://x.com/B0N3SYeth" },
    { name: "Email", icon: "email", link: "mailto:bonesy@bonesydesign.com" },
];

// Home page content
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

// About page content
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
        description: (
            <>
                {person.name} is a graphic designer based in the United States, driven by a passion 
                for turning complex problems into clean, intuitive design solutions. His work spans 
                across digital interfaces, interactive experiences, and design innovation.
            </>
        ),
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
                    <>Founded Bonesy Design to deliver creative solutions in UI/UX, branding, and web development.</>,
                    <>Collaborated with clients to create functional and visually appealing digital experiences.</>,
                    <>Specialized in building seamless user interfaces across web and mobile platforms.</>,
                    <>Developed a custom design system, improving interaction consistency by 30%.</>,
                ],
                images: [
                    {
                        src: "/images/work/BonesyDesign.png",
                        alt: "Bonesy Design Logotype",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "Certified Tree Care LLC",
                timeframe: "March 2012 - June 2024",
                role: "Chief Development Officer",
                achievements: [
                    <>Led IT initiatives, enhancing operational efficiencies and digital transformation.</>,
                    <>Implemented CRM and Actsoft systems, increasing efficiency by 20%.</>,
                    <>Developed marketing strategies that boosted leads by 30%.</>,
                    <>Launched safety programs, significantly reducing workplace incidents.</>,
                ],
                images: [
                    {
                        src: "/images/work/ctclogo.png",
                        alt: "Certified Tree Care Logo",
                        width: 16,
                        height: 9,
                    },
                ],
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
                images: [
                    { src: "/images/projects/project-01/cover-02.jpg", alt: "Figma Project", width: 16, height: 9 },
                ],
            },
            {
                title: "Next.js",
                description: "Building apps with Next.js, Supabase, and Once UI.",
                images: [
                    { src: "/images/projects/project-01/cover-04.jpg", alt: "Next.js Project", width: 16, height: 9 },
                ],
            },
        ],
    },
};

// Blog content
const blog = {
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently.`,
};

// Work content
const work = {
    label: "Work",
    title: "My Projects",
    description: `Explore design and dev projects by ${person.name}.`,
};

// Gallery content
const gallery = {
    label: "Gallery",
    title: "My Photo Gallery",
    description: `A curated collection of photos by ${person.name}.`,
    images: [
        { src: "/images/gallery/54955-aerial-view-of-las-vegas-cityscape-lit-up-at-2023-11-27-05-29-42-utc.jpg", alt: "Image 1", orientation: "horizontal" },
        { src: "/images/gallery/austin-city-skyline-near-first-street-bridge-color-2024-09-15-15-51-37-utc.jpg", alt: "Image 2", orientation: "horizontal" },
        { src: "/images/gallery/texas-bluebonnets-on-a-hill-with-windmill-in-backg-2023-11-27-05-14-09-utc.jpg", alt: "Image 3", orientation: "vertical" },
    ],
};

// Admin dashboard content
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

// Export all content
export { person, social, newsletter, home, about, blog, work, gallery, admin };
