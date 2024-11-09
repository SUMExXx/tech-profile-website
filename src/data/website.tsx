interface WebSite{
    w3url: string,
    url: string
    blogUrl: string,
    baseUrl: string,
}

export const website: WebSite = {
    w3url: 'https://www.sumandebnath.site',
    url: 'https://www.sumandebnath.site',
    blogUrl: 'https://blog.sumandebnath.site',
    baseUrl: 'https://www.sumandebnath.site'
}

interface WebData{
    title: string,
    description: string,
    keywords: string
}

export const webData: WebData = {
    title: 'Suman Debnath',
    description: 'I am Suman Debnath, a Computer Science Engineering UnderGrad at SGSITS, Indore. I am a Web Developer, Flutter Developer, UI/UX Designer and Graphic Designer.',
    keywords: 'Suman, Debnath, Suman Debnath, Web, Web Developer, Flutter, Flutter Developer, profile, blog, NextJS, SGSITS, Computer, Science, Engineering, Engineer, Software, Developer'
}

interface NavbarLink{
    text: string,
    link: string 
}

export const navbarLinks: NavbarLink[] = [
    {
        text: "About",
        link: "/"
    },
    {
        text: "Projects",
        link: "/projects"
    },
    {
        text: "Experience",
        link: "/experience"
    },
    {
        text: "Contact",
        link: "#contact"
    }
]

interface WebContent{
    name: string,
    blogs: string,
    qualification: string,
    skill1: string,
    skill2: string,
    skill3: string,
    skill4: string,
    skill5: string,
    skill6: string,
    bio: string,
    download: string,
    featured: string,
    education: string,
    skills: string,
    skill1Detail: string,
    skill2Detail: string,
    profileWebsite: string,
    more: string
    copyright: string,
    sendMessage: string,
    linkedIn: string,
    github: string,
    phone: string,
    email: string
}

export const contents: WebContent= {
    name: 'Suman Debnath',
    blogs: 'Blogs',
    qualification: 'Computer Science Engineer',
    skill1: "Web Developer",
    skill2: "Flutter Developer",
    skill3: "UI/UX Designer",
    skill4: "Graphic Designer",
    skill5: "Media Editor",
    skill6: "Programmer",
    bio: "Hi! I am Suman Debnath, Undergraduate student at  Shri G. S. Institute of Technology, Indore in the department of Computer Science Engineering. I am a passionate Software Developer with a variety of creative skillset.",
    download: "Download Resume",
    featured: "Featured Works",
    education: "Education",
    skills: "Skills",
    skill1Detail: "WEB DEVELOPMENT",
    skill2Detail: "FLUTTER",
    profileWebsite: "Profile Website",
    more: "Recent from Suman Debnath",
    copyright: "© 2024 All right reserved",
    sendMessage: "Send Message",
    linkedIn: "/suman-debnath6",
    github: "/SUMExXx666",
    phone: "+91 89748 63731",
    email: "sumexxx666@gmail.com"
}

export const skills: string[]= [
    "Next.JS", "React.JS", "Flutter", "Android", "Express.JS", "MongoDB", "Figma", "Firebase", "Docker", "TypeScript", "Node.JS", "TailwindCSS", "C/C++", "Python", "Java", "JavaScript", "ES6+", "Dart", "HTML", "CSS", "XML", "Bootstrap", "Git", "GitHub", "SQL", "Linux", "Scripting"
]

interface FeaturedItems {
    image: string,
    link: string,
    text: string
}

export const featuredImages: FeaturedItems[]= [
    {
        image: "/images/carousel1.png",
        link: '/',
        text: "A hobby ecommerce website for ordering food using MERN stack, integrated with Razorpay payment Gateway."
    },
    {
        image: "/images/carousel2.png",
        link: '/',
        text: "A display website for a club showcasing the features, events, information and team"
    },
    {
        image: "/images/carousel3.png",
        link: '/',
        text: "A web platform that provides a playground for C++ and Java Code compilation and a problem solving section that provides questions and matches the code with test cases, all without Internet in a LAN server."
    },
    {
        image: "/images/carousel4.png",
        link: '/',
        text: "A flutter app that enables the customers to view and book services from nearby freelancing service providers and also place bids for works for the service providers to accept. It will include a robust service provider selection options, work tracking and payments."
    },
]

export const education = {
    first: {
        title: 'B. Tech. CSE, SGSITS',
        text: 'Currently pursuing Bachelor of Technology in Computer Science Engineering from Shri G. S. Institute of Technology and Science, Indore. I am also associated with Club GS Production House as Advisory Board Member, Computer Club as Graphic Designer and held Head of Web Development at E-Cell, SGSITS.',
        image: '/images/sgsits.png',
        year: '2025'
    },
    second: {
        title: 'HSC Science, SKMS AGT',
        text: 'Currently pursuing Bachelor of Technology in Computer Science Engineering from Shri G. S. Institute of Technology and Science, Indore. I am also associated with Club GS Production House as Advisory Board Member, Computer Club as Graphic Designer and held Head of Web Development at E-Cell, SGSITS.',
        image: '/images/skms.png',
        year: '2021'
    },
    third: {
        title: 'SSC, SKMS AGT',
        text: 'Currently pursuing Bachelor of Technology in Computer Science Engineering from Shri G. S. Institute of Technology and Science, Indore. I am also associated with Club GS Production House as Advisory Board Member, Computer Club as Graphic Designer and held Head of Web Development at E-Cell, SGSITS.',
        image: '/images/skms.png',
        year: '2019'
    }
}

interface Socials{
    linkedin: string,
    instagram: string,
    github: string,
    blogs: string
    phone: string,
    email: string
}

export const socials: Socials = {
    linkedin: 'https://www.linkedin.com/in/suman-debnath6/',
    instagram: 'https://www.instagram.com/sumex.in/',
    github: 'https://github.com/SUMExXx',
    blogs: '/blogs',
    phone: 'tel:+918974863731',
    email: 'mailto:sumexxx666@gmail.com'
}

interface WebTechIcon{
    url: string,
    alt: string,
    height: number,
    width: number
}

export const webTechIcons: WebTechIcon[]= [
    {
        url: "/icons/nextjs-monochrome.png",
        alt: 'NextJS',
        height: 40,
        width: 40,
    },
    {
        url: "/icons/reactjs-monochrome.png",
        alt: 'ReactJS',
        height: 40,
        width: 40,
    },
    {
        url: "/icons/tailwindcss-monochrome.png",
        alt: 'TailwindCSS',
        height: 40,
        width: 40,
    },
    {
        url: "/icons/nodejs-monochrome.png",
        alt: 'NodeJS',
        height: 40,
        width: 62.44,
    },
    {
        url: "/icons/typescript-monochrome.png",
        alt: 'TypeScript',
        height: 40,
        width: 40,
    },
    {
        url: "/icons/expressjs-monochrome.png",
        alt: 'ExpressJS',
        height: 40,
        width: 40,
    },
    {
        url: "/icons/mongodb-monochrome.png",
        alt: 'MongoDB',
        height: 40,
        width: 145.1,
    },
    {
        url: "/icons/postgresql-monochrome.png",
        alt: 'PostgreSQL',
        height: 40,
        width: 38.53,
    },
    {
        url: "/icons/cloudinary-monochrome.png",
        alt: 'Cloudinary',
        height: 40,
        width: 55.83,
    },
    {
        url: "/icons/firebase-monochrome.png",
        alt: 'Firebase',
        height: 40,
        width: 32.29,
    },
    {
        url: "/icons/framermotion-monochrome.png",
        alt: 'FramerMotion',
        height: 40,
        width: 40,
    },
]

interface ProjectPreview{
    image: string,
    url: string,
    title: string
}

interface ProjectPreviews{
    webdev: ProjectPreview[],
    flutter: ProjectPreview[],
    uiux: ProjectPreview[],
    graphics: ProjectPreview[]
} 

export const projectPreviews: ProjectPreviews = {
    webdev: [
        {
            image: '/images/foodhub1.png',
            url: '/',
            title: 'FoodHub: A hobby ecommerce website'
        },
        {
            image: '/images/foodhub2.png',
            url: '/',
            title: 'FoodHub: A hobby ecommerce website'
        },
        {
            image: '/images/gsph1.png',
            url: '/',
            title: 'FoodHub: A hobby ecommerce website'
        },
        {
            image: '/images/codemon1.png',
            url: '/',
            title: 'FoodHub: A hobby ecommerce website'
        },
        {
            image: '/images/codemon2.png',
            url: '/',
            title: 'FoodHub: A hobby ecommerce website'
        },
        {
            image: '/images/sharehub1.png',
            url: '/',
            title: 'FoodHub: A hobby ecommerce website'
        }
    ],
    flutter: [

    ],
    uiux: [

    ],
    graphics: [

    ]
}