"use client";
import { featuredImages } from '@/data/website';
import React, { useState } from 'react';
import Image from "next/image";

const CarouselFeatures = () => {

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
        
        
        <div className="md:flex hidden md:gap-[40px] justify-center items-center">
            <button title="scroll-left" className="bg-no-repeat w-[52px] h-[112px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{background: "url('/images/left.png')"}} onClick={prevSlide}/>
            <div className='flex flex-col w-[956px] overflow-hidden md:gap-[40px]'>
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <Image key={index} src={item.image} alt={'carousel1'} height={564} width={956}/>
                    ))}
                </div>
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <span key={index} className='text text-lightViolet w-[956px] min-w-[956px]'>{item.text}</span>
                    ))}
                </div>
            </div>
            <button title="scroll-left" className="bg-no-repeat w-[52px] h-[112px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{background: "url('/images/right.png')"}} onClick={nextSlide}/>
        </div>
        
    );
};

export default CarouselFeatures;
