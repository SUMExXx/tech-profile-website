"use client";
import { contents, featuredImages, webData, website } from '@/data/website';
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { blogs } from '@/app/(blog-group)/blog/data/recentBlogs';
import { useEffect } from "react"

const ProgressBar = () => {

    const [width, setWidth] = useState<number>(0.01);

    useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll percentage
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / documentHeight;

      // Calculate new width as a percentage
      const newWidth = scrollPercentage * 100; // Adjust the width scale here
      setWidth(newWidth);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        
        <div className="w-full h-[30px] fixed top-[80px] flex justify-start items-start grid-back">
          <div id="progress" className={`bg-violet h-[6px] z-50`} style={{width: `${width}%`}}></div>
        </div>
    );
};

export default ProgressBar;
