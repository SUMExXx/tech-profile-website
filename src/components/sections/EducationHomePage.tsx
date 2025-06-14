"use client";
import React, { useEffect, useRef } from 'react';
import { education } from "@/lib/data/website";
import Image from "next/image";
import Reveal from '@/components/Reveal';

export default function EducationHomePage() {

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
    <section className='flex flex-col justify-center items-start w-full bg-gradient-to-b from-main-primary to-[#3C095D] bg-cover'>
        <div className="flex w-full justify-center items-start md:gap-[40px] gap-[25px] md:pt-[0px] md:pb-[100px] pb-[60px] md:px-[20px] md:py-[20px]">
            <div className="md:flex hidden flex-col md:gap-[120px] justify-start items-start w-[100%] h-full px-[60px] py-[120px]">
                <Reveal>
                    <div ref={elementRef1} id={'elementRef1'} className='flex w-full flex-col justify-center items-start md:gap-[40px]'>
                        <div className='flex relative w-full md:flex-row flex-col justify-center items-center md:gap-[40px] gap-[20px]'>
                            <Image src={education.first.image} alt={'carousel1'} height={473.04} width={629.63} className='h-[473px] w-[629px]'/>
                            <span className='w-full text text-white'>{education.first.text}</span>
                            <span className='absolute text-white subtitle left-[70px] top-[-6px]'>{education.first.title}</span>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div ref={elementRef2} id={'elementRef2'} className='flex w-full flex-col justify-center items-start md:gap-[40px]'>
                        <div className='flex relative w-full md:flex-row flex-col justify-center items-center md:gap-[40px]'>
                            <Image src={education.second.image} alt={'carousel1'} height={473.04} width={629.63}/>
                            <span className='w-full text text-white'>{education.second.text}</span>
                            <span className='absolute text-white subtitle left-[70px] top-[-6px]'>{education.second.title}</span>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div ref={elementRef3} id={'elementRef3'} className='flex w-full flex-col justify-center items-start md:gap-[40px]'>
                        <div className='flex relative w-full md:flex-row flex-col justify-center items-center md:gap-[40px]'>
                            <Image src={education.third.image} alt={'carousel1'} height={473.04} width={629.63}/>
                            <span className='w-full text text-white'>{education.third.text}</span>
                            <span className='absolute text-white subtitle left-[70px] top-[-6px]'>{education.third.title}</span>
                        </div>
                    </div>
                </Reveal>
            </div>
            
            <div className="md:flex hidden sticky top-[60px] justify-end pr-[40px] md:gap-[20px] items-center w-[20%] overflow-y-hidden" style={{height: "calc(100vh - 60px)"}}>
                <div className="w-full overflow-y-hidden overflow-x-visible h-full">
                    <div className="flex flex-col justify-start items-center overflow-x-visible h-[300%] transition-transform duration-500" ref={animatedRef}>
                        <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                            <span className="heading text-white">{education.first.year}</span>
                        </div>
                        <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                            <span className="heading text-white">{education.second.year}</span>
                        </div>
                        <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                            <span className="heading text-white">{education.third.year}</span>
                        </div>
                    </div>
                </div>
                <div className="w-[60px] overflow-y-hidden overflow-x-visible h-full bg-gradient-to-b from-main-primary via-[#1D1D1F] to-[#400963] bg-center" style={{backgroundSize: "50%", backgroundRepeat: "no-repeat"}}>
                    <div className="flex flex-col justify-start items-center overflow-x-visible h-[300%] transition-transform duration-500" ref={animatedRef2}>
                        <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                            <div className="h-[40px] w-[40px] bg-main-quaternary outline-4 -outline-offset-4 outline-main-secondary rounded-full"/>
                        </div>
                        <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                            <div className="h-[40px] w-[40px] bg-main-quaternary outline-4 -outline-offset-4 outline-main-secondary rounded-full"/>
                        </div>
                        <div className="flex flex-col justify-center items-center overflow-x-visible h-1/3">
                            <div className="h-[40px] w-[40px] bg-main-quaternary outline-4 -outline-offset-4 outline-main-secondary rounded-full"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-col justify-end items-center w-full h-full pt-[40px]">
                <div className='flex justify-between items-center w-full h-[340px] pr-[20px]'>
                    <Reveal>
                        <div className='flex w-full flex-col justify-center items-start md:gap-[40px] gap-[20px] p-[20px]'>
                            <Image src={education.first.image} alt={'carousel1'} height={173} width={230}/>
                            <span className='text text-white'>{education.first.text}</span>
                        </div>
                    </Reveal>
                    <div className='flex justify-end items-center h-full gap-[20px]'>
                        <Reveal>
                            <span className="heading text-white">{education.first.year}</span>
                        </Reveal>
                        <div className="w-[20px] flex flex-col justify-center items-start h-full bg-gradient-to-b from-main-primary to-[#1D1D1F] bg-center" style={{backgroundSize: "50%", backgroundRepeat: "no-repeat"}}>
                            <div className="h-[20px] w-[20px] bg-main-quaternary outline-2 -outline-offset-2 outline-main-secondary rounded-full"/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full h-[400px] pr-[20px]'>
                    <Reveal>
                        <div className='flex w-full flex-col justify-center items-start md:gap-[40px] gap-[20px] p-[20px]'>
                            <Image src={education.second.image} alt={'carousel1'} height={173} width={230}/>
                            <span className='text text-white'>{education.second.text}</span>
                        </div>
                    </Reveal>
                    <div className='flex justify-end items-center h-full gap-[20px]'>
                        <Reveal>
                            <span className="heading text-white">{education.second.year}</span>
                        </Reveal>
                        <div className="w-[20px] flex flex-col justify-center items-start h-full bg-gradient-to-b from-[#1D1D1F] to-[#1D1D1F] bg-center" style={{backgroundSize: "50%", backgroundRepeat: "no-repeat"}}>
                            <div className="h-[20px] w-[20px] bg-main-quaternary outline-2 -outline-offset-2 outline-main-secondary rounded-full"/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full h-[300px] pr-[20px]'>
                    <Reveal>
                        <div className='flex w-full flex-col justify-center items-center md:gap-[40px] gap-[20px] p-[20px]'>
                            <Image src={education.third.image} alt={'carousel1'} height={173} width={230}/>
                            <span className='text text-white'>{education.third.text}</span>
                        </div>
                    </Reveal>
                    <div className='flex justify-end items-center h-full gap-[20px]'>
                        <Reveal>
                            <span className="heading text-white">{education.third.year}</span>
                        </Reveal>
                        <div className="w-[20px] flex flex-col justify-center items-start h-full bg-gradient-to-b from-[#1D1D1F] to-[#400963] bg-center" style={{backgroundSize: "50%", backgroundRepeat: "no-repeat"}}>
                            <div className="h-[20px] w-[20px] bg-main-quaternary outline-2 -outline-offset-2 outline-main-secondary rounded-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full md:h-[89px] relative flex justify-center items-end">
            <div className="md:absolute static md:bottom-[-1px] md:right-0 flex justify-center items-center md:h-[89px] h-[36px] w-[200px] md:w-[490px] heading text-white bg-black" style={{background: "url('/images/titleVectorBlack.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Skills
            </div>
        </div>
    </section>
  );
}