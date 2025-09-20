type WebSite = {
    name: string;
    w3url: string;
    url: string;
    blogUrl: string;
    baseUrl: string;
    TWITTER: string;
}

type WebData = {
    title: string;
    description: string;
    keywords: string[];
}

type FeaturedItems = {
    image: string;
    link: string;
    text: string;
}

type Socials = {
    linkedIn: string;
    instagram: string;
    github: string;
    blogs: string;
    phone: string;
    email: string;
}

type WebTechIcon = {
    url: string;
    alt: string;
    height: number;
    width: number;
}

type ProjectPreview = {
    image: string;
    url: string;
    title: string;
}

type ProjectPreviews = {
    webdev: ProjectPreview[];
    flutter: ProjectPreview[];
    uiux: ProjectPreview[];
    graphics: ProjectPreview[];
} 

type Blog = {
    title: string;
    url: string;
    description: string;
    keywords: string[];
    author: string;
    page: React.ReactNode;
    cover: string;
    published: Date;
}

type TimelineItem = {
    title: string;
    subtitle: string;
    text: string;
    image: string;
    year: string;
}