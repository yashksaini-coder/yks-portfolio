import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Yash K.',
    lastName:  'Saini',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Open Source Developer', // Change this to your role
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'हिन्दी']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/yashksaini-coder',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/yashksaini/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/yash_k_saini',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:yashksaini89@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Developer and Writer</>,
    subline: <>Software Developer at <InlineCode>DEV Rhylme</InlineCode><br/> In my free-time, I work & build my own projects.</>
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
        description: <>I'm an Open Source Developer based out of India, super into Open Source, Data Science, AI/ML. Developing & Contributing to different Open Source Projects and Organizations.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'DEVRhylme Foundation',
                timeframe: '2025 - Present',
                role: 'Software Developer',
                achievements: [
                    <>Working on the main Organization's website, creating Event edit card feature, and Auth0</>,
                    <>Maintaining and collaborating on different projects of the organization</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/devrhylme.png',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Amateurs League',
                timeframe: '2024',
                role: 'Lead Developer',
                achievements: [
                    <>Developed a python library from the scratch which was designed designed to 🕵️‍♂️ stealthily integrate files within a machine, ensuring 🛡️ discreet and seamless file operations without detection</>,
                    <>Integrated <InlineCode>MKdocs</InlineCode> for easy to setup & maintain documentation. Using general Markdown with CI/CD pipeline automations</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Deenbandhu Chhotu Ram University Of Science And Technology',
                description: <>Completed 3-year Bachelor's course.</>,
            },
            {
                name: 'UpGrad',
                description: <>Studied Data Science & Analytics.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Python',
                description: <>Able to build web applications using <strong>Streamlit</strong> & <strong>Flask</strong></>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Shadcn + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-05.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'React.js',
                description: <>Building web applications using React.js + Node + Tailwind CSS</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-06.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-07.png',
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
    title: 'Writing about Open Source and tech...',
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
    title: 'My AI photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };