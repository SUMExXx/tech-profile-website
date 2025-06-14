import Blog1 from "@/components/blogs/Blog1";
import Blog2 from "@/components/blogs/Blog2";

export const blogs: Blog[] = [
  {
    url: 'expressjs-backend-setup-with-typescript-in-es2020',
    title: 'ExpressJS Backend setup with TypeScript and ES2020 2025 Guide',
    author: 'Suman Debnath',
    cover: '/blogs/blog2/preview.png',
    page: <Blog2 />,
    published: new Date("2025-06-14")
  },
  {
    url: 'switching-to-bigger-ssd-without-losing-data',
    title: 'How to upgrade smaller SSD to bigger SSD without losing any data',
    author: 'Suman Debnath',
    cover: '/blogs/blog1/preview.png',
    page: <Blog1 />,
    published: new Date("2025-06-14")
  },
]
