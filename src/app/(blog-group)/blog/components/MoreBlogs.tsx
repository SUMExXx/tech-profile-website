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
        
        
        <div className="md:flex hidden sticky top-[110px] md:gap-[40px] flex-col justify-start items-start max-w-[400px] rounded-2xl bg-grey p-[40px]">
            <h1 className='subtitle text-white'>{contents.more}</h1>
            <div className="flex flex-col justify-start items-start overflow-hidden w-full">
                {
                    blogs.map((blog, index) => 
                        <div key={index} className="w-full">
                            <Link href={process.env.NEXT_PUBLIC_BLOG_URL + blog.url} title={blog.title} className="text-sm text-lightViolet block whitespace-nowrap truncate text-ellipsis text-overflow-ellipsis overflow-hidden w-full" style={{textOverflow: "ellipsis"}}>
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
