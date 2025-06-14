import { blogs } from "@/lib/blogData/blogs";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {

  return (
    <div className="flex flex-wrap justify-center items-start text-white md:px-20 md:py-2.5 md:gap-5">
      {
        blogs.slice(0, 10).map((blog, index) =>
          <Link href={`${process.env.NEXT_PUBLIC_BLOG_URL}${blog.url}`} key={index} className="flex flex-col justify-center items-center md:p-2.5 md:gap-5 max-w-[400px] bg-main-background rounded-2xl w-full">
            <Image src={blog.cover} alt={blog.title} width={200} height={160} draggable={false} className="w-full md:h-[200px] object-cover rounded-xl"/>
            <div className="w-full h-full flex flex-col md:h-[80px] md:gap-2">
              <h2 className="line-clamp-2">{blog.title}</h2>
              <span className="text-sm text-main-primary">{blog.published.toDateString()}</span>
            </div>
          </Link>
        )
      }
    </div>
  );
}
