interface WebSite{
    w3url: string,
    url: string
    blogUrl: string
}

export const website: WebSite = {
    w3url: 'https://www.sumandebnath.online',
    url: 'https://sumandebnath.online',
    blogUrl: 'https://blog.sumandebnath.online'
}

interface WebData{
    title: string,
    description: string
}

export const webData: WebData = {
    title: 'FoodHub',
    description: 'Your Culinary Adventure Awaits!'
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
    education: "Education"
}

export const skills: string[]= [
    "Next.JS", "React.JS", "Flutter", "Android", "Express.JS", "MongoDB", "Figma", "Firebase", "Docker", "TypeScript", "Node.JS", "TailwindCSS", "C/C++", "Python", "Java", "JavaScript", "ES6+", "Dart", "HTML", "CSS", "XML", "Bootstrap", "Git", "GitHub", "SQL", "Linux", "Scripting"
]

interface FeaturedItems {
    image: string,
    text: string
}

export const featuredImages: FeaturedItems[]= [
    {
        image: "/images/carousel1.png",
        text: "Hi! I am Suman Debnath, Undergraduate student at  Shri G. S. Institute of Technology, Indore in the department of Computer Science Engineering. I am a passionate Software Developer with a variety of creative skillset."
    },
    {
        image: "/images/carousel2.png",
        text: "Hi! I am Suman Debnath, Undergraduate student at  Shri G. S. Institute of Technology, Indore in the department of Computer Science Engineering. I am a passionate Software Developer with a variety of creative skillset."
    },
    {
        image: "/images/carousel1.png",
        text: "Hi! I am Suman Debnath, Undergraduate student at  Shri G. S. Institute of Technology, Indore in the department of Computer Science Engineering. I am a passionate Software Developer with a variety of creative skillset."
    },
    {
        image: "/images/carousel1.png",
        text: "Hi! I am Suman Debnath, Undergraduate student at  Shri G. S. Institute of Technology, Indore in the department of Computer Science Engineering. I am a passionate Software Developer with a variety of creative skillset."
    },
    {
        image: "/images/carousel1.png",
        text: "Hi! I am Suman Debnath, Undergraduate student at  Shri G. S. Institute of Technology, Indore in the department of Computer Science Engineering. I am a passionate Software Developer with a variety of creative skillset."
    },
]

interface FooterLink{
    text: string,
    url: string,
}

export const footerLinks = [
    {
        heading: 'Support Team',
        links: [
            {
                text: 'Help Center',
                url: ''
            },
            {
                text: 'Tweet Us',
                url: ''
            },
            {
                text: 'Email',
                url: ''
            },
            {
                text: 'Customer Care',
                url: ''
            }
        ]
    },
    {
        heading: 'Links',
        links: [
            {
                text: 'Menu',
                url: ''
            },
            {
                text: 'Combos',
                url: ''
            },
            {
                text: 'Offers',
                url: ''
            },
            {
                text: 'Our Services',
                url: ''
            }
        ]
    },
    {
        heading: 'Contact us',
        links: [
            {
                text: 'contact@foodhub.com',
                url: ''
            },
            {
                text: '+91 89748 63731',
                url: ''
            },
        ]
    }
]


interface Category{
    name: string,
    icon: string,
    redirect: string
}

export const categories: Category[]= [
    {
        name: 'Italian',
        icon: '/icons/italian.png',
        redirect: '/menu?type=italian',
    },
    {
        name: 'Indian',
        icon: '/icons/indian.png',
        redirect: '/menu?type=indian',
    },
    {
        name: 'Chinese',
        icon: '/icons/chinese.png',
        redirect: '/menu?type=chinese',
    },
    {
        name: 'Japanese',
        icon: '/icons/japanese.png',
        redirect: '/menu?type=japanese',
    },
    {
        name: 'Mexican',
        icon: '/icons/japanese.png',
        redirect: '/menu?type=mexican',
    },
    {
        name: 'Breakfast',
        icon: '/icons/japanese.png',
        redirect: '/menu?type=breakfast',
    },
    {
        name: 'Starters',
        icon: '/icons/japanese.png',
        redirect: '/menu?type=starters',
    },
    {
        name: 'Desserts',
        icon: '/icons/japanese.png',
        redirect: '/menu?type=desserts',
    },
    {
        name: 'Drinks',
        icon: '/icons/japanese.png',
        redirect: '/menu?type=drinks',
    }
]

interface Socials{
    linkedin: string,
    instagram: string,
    github: string,
    blogs: string
}

export const socials: Socials = {
    linkedin: 'https://www.linkedin.com/in/suman-debnath6/',
    instagram: 'https://www.instagram.com/sumex.in/',
    github: 'https://github.com/SUMExXx',
    blogs: '/blogs'
}