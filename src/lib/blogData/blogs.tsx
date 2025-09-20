import Blog1 from "@/components/blogs/Blog1";
import Blog2 from "@/components/blogs/Blog2";
import Blog3 from "@/components/blogs/Blog3";

export const blogs: Blog[] = [
  {
    url: 'expressjs-backend-setup-with-typescript-in-es2020',
    title: 'ExpressJS Backend setup with TypeScript and ES2020 2025 Guide',
    description: 'ExpressJS Backend setup with TypeScript and ES2020 2025 Guide',
    keywords: ['ExpressJS', 'TypeScript', 'ES2020', 'Backend Setup'],
    author: 'Suman Debnath',
    cover: '/images/blogs/blog2/preview.png',
    page: <Blog2 />,
    published: new Date("2025-06-14")
  },
  {
    url: 'switching-to-bigger-ssd-without-losing-data',
    title: 'How to upgrade smaller SSD to bigger SSD without losing any data',
    description: 'How to upgrade smaller SSD to bigger SSD without losing any data',
    keywords: ['SSD', 'Data Migration', 'Upgrade'],
    author: 'Suman Debnath',
    cover: '/images/blogs/blog1/preview.png',
    page: <Blog1 />,
    published: new Date("2025-06-14")
  },
  {
    url: 'deploying-expressjs-backend-to-aws-elastic-beanstalk',
    title: 'Deploying ExpressJS Backend to AWS Elastic Beanstalk',
    description: 'Deploying ExpressJS Backend to AWS Elastic Beanstalk',
    keywords: ['ExpressJS', 'AWS', 'Elastic Beanstalk', 'Deployment'],
    author: 'Suman Debnath',
    cover: '/images/blogs/blog1/preview.png',
    page: <Blog3 data={2}/>,
    published: new Date("2025-06-14")
  }
]
