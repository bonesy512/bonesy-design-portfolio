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

const social = [
    { name: "GitHub", icon: "github", link: "https://github.com/bonesy512" },
    { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/b0n3syeth/" },
    { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/thomasmschustereit/" },
    { name: "X", icon: "x", link: "https://x.com/B0N3SYeth" },
    { name: "Email", icon: "email", link: "mailto:bonesy@bonesydesign.com" },
];

const newsletter = {
    display: true,
    title: `Subscribe to ${person.firstName}'s Newsletter`,
    description: "I occasionally write about design, technology, and share thoughts on the intersection of creativity and AI.",
};

const about = {
    label: "About",
    title: "About Me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}.`,
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
};

// Export all content
export { person, social, newsletter, about, blog, work, gallery, admin };
