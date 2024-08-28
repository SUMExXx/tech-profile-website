"use client";
import { contents, featuredImages, webData, website } from '@/data/website';
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { blogs } from '@/app/(blog-group)/blog/data/recentBlogs';

const MoreBlogs = () => {

    const items = featuredImages

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
    };

    return (
        
        
        <div className="flex sticky top-[110px] md:gap-[40px] gap-[20px] flex-col justify-start items-start max-w-[400px] w-full rounded-2xl bg-grey md:p-[40px] p-[20px]">
            <h1 className='md:text-[20px] test-[16px] text-white'>{contents.more}</h1>
            <div className="flex flex-col justify-start items-start overflow-hidden w-full">
                {
                    blogs.map((blog, index) => 
                        <div key={index} className="w-full">
                            <Link href={process.env.NEXT_PUBLIC_BLOG_URL||website.blogUrl + blog.url} title={blog.title} className="text-sm text-lightViolet block whitespace-nowrap truncate text-ellipsis text-overflow-ellipsis overflow-hidden w-full" style={{textOverflow: "ellipsis"}}>
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
