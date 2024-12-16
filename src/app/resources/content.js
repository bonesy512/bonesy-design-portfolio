import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Thomas',
    lastName:  'Schustereit',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Graphic Designer',
    avatar:    '/images/avatar.jpg',
    location:  'America/Chicago',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and AI.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/bonesy512',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/b0n3syeth/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/thomasmschustereit/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/B0N3SYeth',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:bonesy@bonesydesign.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `${person.name}'s Portfolio website showcasing his work as Bonesy Design`,
    headline: <>Bonesy Design</>,
    subline: <>I'm Thomas Schustereit, the creative force behind <InlineCode>Bonesy Design</InlineCode>. I specialize in crafting seamless and intuitive user experiences. Outside of my professional work, I also bring my own ideas to life through personal projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Thomas is a graphic designer based in the United States, driven by a passion for turning complex problems into clean, intuitive design solutions. His work spans across digital interfaces, interactive experiences, and the intersection of design and emerging technologies, always focusing on creating seamless user experiences.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Bonesy Design',
                timeframe: 'September 2014 - Present',
                role: 'Founder & Lead Designer',
                achievements: [
                    <>Founded Bonesy Design to deliver creative solutions in UI/UX design, branding, and web development for diverse clients.</>,
                    <>Collaborated with clients to transform their vision into functional and visually appealing digital experiences.</>,
                    <>Specialized in building intuitive user interfaces and seamless user experiences across web and mobile platforms.</>,
                    <>Led design projects from concept through execution, providing a complete design strategy for clients, from startups to established brands.</>,
                    <>Developed a custom design system for multiple clients, improving consistency and user interaction by 30%.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/work/BonesyDesign.png',
                        alt: 'Bonesy Design Logotype',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Certified Tree Care LLC',
                timeframe: 'March 2012 - June 2024',
                role: 'Chief Development Officer',
                achievements: [
                    <>Spearheaded IT initiatives, enhancing system efficiencies and driving digital transformation, resulting in more streamlined reporting and improved operational processes.</>,
                    <>Led the integration of Quickbase CRM and Encore Actsoft, increasing operational efficiency by 20% and improving data management across multiple locations.</>,
                    <>Developed and executed strategic business development plans, leading to substantial revenue growth and market expansion in cities such as Austin, San Antonio, Houston, Dallas, and Louisville.</>,
                    <>Implemented a comprehensive digital marketing strategy, including SEO, social media, and content creation, boosting online leads by 30%.</>,
                    <>Directed cross-functional teams and sales training programs, leveraging tools like Cardone U to enhance team performance and achieve business targets.</>,
                    <>Coordinated the launch of new services, diversifying the company’s offerings and increasing overall revenue streams.</>,
                    <>Led safety programs and risk assessments, ensuring regulatory compliance and significantly reducing incident rates.</>
                ],
                images: [ // optional
                    {
                        src: '/images/work/ctclogo.png',
                        alt: 'Certified Tree Care Logo',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://bonesydesign.com
    images: [
        { 
            src: '/images/gallery/smooth-reflection-austin-texas-downtown-city-skyli-2024-09-13-16-22-02-utc.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/54955-aerial-view-of-las-vegas-cityscape-lit-up-at-2023-11-27-05-29-42-utc.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/texas-bluebonnets-on-a-hill-with-windmill-in-backg-2023-11-27-05-14-09-utc.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/aerial-view-of-a-highway-passing-through-a-desert-2023-11-27-05-09-26-utc.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/austin-city-skyline-near-first-street-bridge-color-2024-09-15-15-51-37-utc.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/vertical-shot-of-texas-state-capitol-in-austin-te-2023-11-27-05-32-07-utc.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/austin-texas-usa-downtown-city-skyline-on-the-co-2023-11-27-04-59-39-utc.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/vertical-shot-of-the-beautiful-park-and-buildings-2023-11-27-05-03-31-utc.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/charging-pile-with-chargers-and-part-of-black-elec-2023-11-27-05-18-10-utc.JPG', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/marketing-strategy-planning-strategy-concept-2023-11-27-04-52-44-utc.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/high-angle-vertical-shot-of-a-black-and-white-inte-2023-11-27-05-06-20-utc.jpeg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/night-scene-with-the-milky-way-2023-11-27-04-57-48-utc.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/old-windmill-with-trees-and-bluebonnets-in-the-tex-2023-11-27-05-30-53-utc.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/robot-hand-finger-pointing-ai-technology-backgrou-2023-11-27-05-33-55-utc.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

const admin = {
    label: 'Admin',
    title: 'Admin Dashboard',
    description: 'Manage and monitor Project Enma AI-powered trading assistant.',
    sections: [
        {
            title: 'Live Trade Insights',
            description: 'Track USD/JPY price updates and key performance metrics.',
        },
        {
            title: 'Market Sentiment',
            description: 'Analyze sentiment trends from financial news and events.',
        },
        {
            title: 'Alerts',
            description: 'Receive real-time notifications for trading opportunities.',
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery, admin };
