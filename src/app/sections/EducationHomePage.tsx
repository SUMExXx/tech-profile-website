"use client";
import React, { useState, useEffect, useRef } from 'react';
import CarouselFeatures from "@/components/CarouselFeatures";
import { contents, featuredImages } from "@/data/website";
import Image from "next/image";

export default function EducationHomePage() {

  const items = featuredImages

  const elementRef1 = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const animatedRef = useRef<HTMLDivElement>(null);
  const animatedRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef1.current || !animatedRef.current || !animatedRef2.current) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const targetId = entry.target.id;
            console.log(targetId)

            if (animatedRef.current && animatedRef2.current) {
                switch (targetId) {
                    case 'elementRef1':
                    animatedRef.current.style.transform = 'none';
                    animatedRef2.current.style.transform = 'none';
                    break;
                    case 'elementRef2':
                    animatedRef.current.style.transform = 'translateY(-33.333%)';
                    animatedRef2.current.style.transform = 'translateY(-33.333%)';
                    break;
                    case 'elementRef3':
                    animatedRef.current.style.transform = 'translateY(-66.666%)';
                    animatedRef2.current.style.transform = 'translateY(-66.666%)';
                    break;
                    default:
                    animatedRef.current.style.transform = 'none';
                    animatedRef2.current.style.transform = 'none';
                }
            }
            // observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // observing relative to the viewport
      rootMargin: '0px',
      threshold: 0.8, // Trigger when 100% of the element is visible
    });

    if (elementRef1.current) {
      observer.observe(elementRef1.current);
    }
    if (elementRef2.current) {
      observer.observe(elementRef2.current);
    }
    if (elementRef3.current) {
      observer.observe(elementRef3.current);
    }

    // Cleanup on component unmount
    return () => {
      if (elementRef1.current) {
        observer.unobserve(elementRef1.current);
      }
      if (elementRef2.current) {
        observer.unobserve(elementRef2.current);
      }
      if (elementRef3.current) {
        observer.unobserve(elementRef3.current);
      }
    };
  }, []);

  return (
    <section className="flex w-full justify-center items-start md:gap-[40px] gap-[25px] md:pt-[0px] md:pb-[200px] md:px-[20px] md:py-[20px] bg-gradient-to-b from-violet to-[#3C095D] bg-cover">
        <div className="md:flex hidden flex-col md:gap-[120px] justify-start items-start w-full h-full px-[60px] py-[120px]">
            <div ref={elementRef1} id={'elementRef1'} className='flex w-full flex-col justify-center items-start md:gap-[40px]'>
                <div className='flex relative w-full md:flex-row flex-col justify-center items-center md:gap-[40px] gap-[20px]'>
                    <Image src={'/images/educationVector.png'} alt={'carousel1'} height={473.04} width={629.63}/>
                    <span className='w-full text text-white'>jddjuvbdjvsdjkvnsdjkvnsdjkvdjkvndjv</span>
                    <span className='absolute text-white subtitle left-[70px] top-[-6px]'>B. Tech CSE, SGSITS</span>
                </div>
            </div>
            <div ref={elementRef2} id={'elementRef2'} className='flex w-full flex-col justify-center items-start md:gap-[40px]'>
                <div className='flex relative w-full md:flex-row flex-col justify-center items-center md:gap-[40px]'>
                    <Image src={'/images/educationVector.png'} alt={'carousel1'} height={473.04} width={629.63}/>
                    <span className='w-full text text-white'>jddjuvbdjvsdjkvnsdjkvnsdjkvdjkvndjv</span>
                    <span className='absolute text-white subtitle left-[70px] top-[-6px]'>B. Tech CSE, SGSITS</span>
                </div>
            </div>
            <div ref={elementRef3} id={'elementRef3'} className='flex w-full flex-col justify-center items-start md:gap-[40px]'>
                <div className='flex relative w-full md:flex-row flex-col justify-center items-center md:gap-[40px]'>
                    <Image src={'/images/educationVector.png'} alt={'carousel1'} height={473.04} width={629.63}/>
                    <span className='w-full text text-white'>jddjuvbdjvsdjkvnsdjkvnsdjkvdjkvndjv</span>
                    <span className='absolute text-white subtitle left-[70px] top-[-6px]'>B. Tech CSE, SGSITS</span>
                </div>
            </div>
        </div>
        <div className="md:flex hidden sticky top-[60px] justify-end pr-[40px] md:gap-[20px] items-center w-[20%] overflow-y-hidden" style={{height: "calc(100vh - 60px)"}}>
            <div className="w-full overflow-y-hidden overflow-x-visible h-full">
                <div className="flex flex-col justify-start items-center overflow-x-visible h-[300%] transition-transform duration-500" ref={animatedRef}>
                    <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                        <span className="heading text-white">2021</span>
                    </div>
                    <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                        <span className="heading text-white">2022</span>
                    </div>
                    <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                        <span className="heading text-white">2023</span>
                    </div>
                </div>
            </div>
            <div className="w-[60px] overflow-y-hidden overflow-x-visible h-full bg-gradient-to-b from-violet via-[#1D1D1F] to-[#400963] bg-center" style={{backgroundSize: "50%", backgroundRepeat: "no-repeat"}}>
                <div className="flex flex-col justify-start items-center overflow-x-visible h-[300%] transition-transform duration-500" ref={animatedRef2}>
                    <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                        <div className="h-[40px] w-[40px] bg-neonGreen outline outline-4 -outline-offset-4 outline-lightViolet rounded-full"/>
                    </div>
                    <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                        <div className="h-[40px] w-[40px] bg-neonGreen outline outline-4 -outline-offset-4 outline-lightViolet rounded-full"/>
                    </div>
                    <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                        <div className="h-[40px] w-[40px] bg-neonGreen outline outline-4 -outline-offset-4 outline-lightViolet rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:hidden flex flex-col justify-end items-center w-full h-full pt-[40px]">
            <div className='flex justify-center items-center w-full h-[240px] pr-[20px] gap-[20px]'>
                <div className='flex w-full flex-col justify-center items-center md:gap-[40px] gap-[20px] p-[20px]'>
                    <Image src={'/images/educationVector.png'} alt={'carousel1'} height={173} width={230}/>
                    <span className='text text-white'>jddjuvbdjvsdjkvnsdjkvnsdjkvdjkvndjv</span>
                </div>
                <span className="heading text-white">2021</span>
                <div className="w-[20px] flex flex-col justify-center items-center h-full bg-gradient-to-b from-violet to-[#1D1D1F] bg-center" style={{backgroundSize: "50%", backgroundRepeat: "no-repeat"}}>
                    <div className="h-[20px] w-[20px] bg-neonGreen outline outline-2 -outline-offset-2 outline-lightViolet rounded-full"/>
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-[240px] pr-[20px] gap-[20px]'>
                <div className='flex w-full flex-col justify-center items-center md:gap-[40px] gap-[20px] p-[20px]'>
                    <Image src={'/images/educationVector.png'} alt={'carousel1'} height={173} width={230}/>
                    <span className='text text-white'>jddjuvbdjvsdjkvnsdjkvnsdjkvdjkvndjv</span>
                </div>
                <span className="heading text-white">2022</span>
                <div className="w-[20px] flex flex-col justify-center items-center h-full bg-gradient-to-b from-[#1D1D1F] to-[#1D1D1F] bg-center" style={{backgroundSize: "50%", backgroundRepeat: "no-repeat"}}>
                    <div className="h-[20px] w-[20px] bg-neonGreen outline outline-2 -outline-offset-2 outline-lightViolet rounded-full"/>
                </div>
            </div>
            <div className='flex justify-center items-center w-full h-[240px] pr-[20px] gap-[20px]'>
                <div className='flex w-full flex-col justify-center items-center md:gap-[40px] gap-[20px] p-[20px]'>
                    <Image src={'/images/educationVector.png'} alt={'carousel1'} height={173} width={230}/>
                    <span className='text text-white'>jddjuvbdjvsdjkvnsdjkvnsdjkvdjkvndjv</span>
                </div>
                <span className="heading text-white">2022</span>
                <div className="w-[20px] flex flex-col justify-center items-center h-full bg-gradient-to-b from-[#1D1D1F] to-[#400963] bg-center" style={{backgroundSize: "50%", backgroundRepeat: "no-repeat"}}>
                    <div className="h-[20px] w-[20px] bg-neonGreen outline outline-2 -outline-offset-2 outline-lightViolet rounded-full"/>
                </div>
            </div>
        </div>
    </section>
  );
}