import { InlineCode } from "@/once-ui/components";

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

const newsletter = {
    display: true,
    title: `Subscribe to ${person.firstName}&#39;s Newsletter`,
    description:
        "I occasionally write about design, technology, and share thoughts on the intersection of creativity and AI.",
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
    title: `${person.name}&#39;s Portfolio`,
    description: `${person.name}&#39;s portfolio showcasing his work at Bonesy Design.`,
    headline: "Bonesy Design",
    subline: (
        <>
            I&#39;m {person.name}, the creative force behind <InlineCode>Bonesy Design</InlineCode>. 
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
        description: (
            <>
                {person.name} is a graphic designer based in the United States, driven by a passion 
                for turning complex problems into clean, intuitive design solutions. His work spans 
                across digital interfaces, interactive experiences, and design innovation.
            </>
        ),
    },
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

export { person, social, newsletter, home, about, admin };
