"use client";
import Link from 'next/link';
import { blogs } from '@/lib/blogData/blogs';

const MoreBlogs = () => {

    return (
        
        <div className="flex sticky top-[110px] md:gap-[40px] gap-[20px] flex-col justify-start lg:items-start items-center lg:max-w-[400px] w-full rounded-2xl bg-main-background md:p-[40px] p-[20px]">
            <h1 className='md:text-[20px] test-[16px] text-white'>More Blogs</h1>
            <div className="flex flex-col justify-start items-start overflow-hidden w-full">
                {
                    blogs.slice(0, 10).map((blog, index) => 
                        <div key={index} className="w-full flex flex-col items-center lg:items-start">
                            <Link href={`/blog/${blog.url}`} title={blog.title} className="text-sm text-main-secondary block whitespace-nowrap truncate text-ellipsis text-overflow-ellipsis overflow-hidden w-full text-center lg:text-left" style={{textOverflow: "ellipsis"}}>
                                {blog.title}
                            </Link>
                            {index < blogs.length - 1 && <hr className="my-2 border-gray-600 w-full" />}
                        </div>
                    )
                }
            </div>
        </div>
        
    );
};

export default MoreBlogs;
