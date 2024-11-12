"use client";
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { navbarLinks, contents, socials } from '@/data/website';

import Menu from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';


// import Menu from './Menu';

const HamburgerMenuBlog = () => {

    // const vh = window.innerHeight;

    // const left = (9200 / 740) * vh

    const [menuOpen, setMenu] = useState(false);

    const close = () => {
        setMenu(false);
        document.body.style.overflow = 'auto';
    }

    const open = () => {
        setMenu(true);
        document.body.style.overflow = 'hidden';
    }

  return (
    <div>
        {
            menuOpen? <button title='close' onClick={close}><Close className='h-[24px] w-[24px] text-violet'/></button> : <button title='open' onClick={open}><Menu className='h-[24px] w-[24px] text-violet'/></button>
        }
        {/* <div className='z-40 top-[60px]' style={{height: "calc(100vh - 60px);"}}>
            <div className={`absolute top-[60px] flex flex-col p-[160px] items-end justify-center background-menu-vector-1 transition-transform duration-300 transform ${menuOpen ? `translate-x-[${9200}px]` : 'translate-x-0'} left-[-10000px]`} style={{height: "calc(100vh - 60px);", width: "calc((100vh - 60px)*463/545)"}}>
                
            </div>
            <div className={`absolute top-[60px] background-menu-vector-2 transition-transform duration-300 transform ${menuOpen ? 'translate-x-[-9710px]' : 'translate-x-0'} right-[-10000px]`} style={{height: "calc(100vh - 60px);", width: "calc((100vh - 60px)*273/545)"}}>

            </div>
            <div className={`absolute top-[60px] left-0 z-40 w-1/3 justify-center items-start flex flex-col gap-[80px] transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{height: "calc(100vh - 60px);"}}>
                {
                    navbarLinks.map(item => (
                        <div key={crypto.randomUUID()} className='transition justify-center ease-in-out hover:animate-text hover:text-[#F00000]'>
                            <Link rel="canonical" className='md:text-[16px] font-medium text-neonGreen' href={item.link}>{item.text}</Link>
                        </div>
                    ))
                }
            </div>
        </div> */}
        <div className={`absolute flex md:hidden background-menu-vector-1 bg-slate-300 top-[60px] z-10 left-0 w-3/4 py-40 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}  p-4 pl-[40px]`} style={{height: 'calc(100vh - 60px)'}}>
            <div className='flex flex-col items-center justify-center md:gap-8 gap-2 w-full heading text-left'>
                <ul className='items-start justify-center gap-[80px] flex flex-col w-full'>
                    {
                        navbarLinks.map(item => (
                            <div key={crypto.randomUUID()} className='transition justify-center ease-in-out hover:animate-text hover:text-[#F00000]'>
                                <Link onClick={close} rel="canonical" className='md:text-[16px] font-medium text-neonGreen' href={item.link}>{item.text}</Link>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
        {/* <div className={`absolute flex md:hidden background-menu-vector-1 bg-slate-300 top-[60px] z-10 left-0 w-3/4 py-40 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}  p-4`} style={{height: 'calc(100vh - 60px)'}}>
            <div className='flex flex-col items-center justify-center md:gap-8 gap-2 w-full text-3xl'>
                <ul className='items-center justify-center gap-8 flex flex-col w-full'>
                    {
                        navbarLinks.map(item => (
                            <div key={crypto.randomUUID()} className='transition justify-center ease-in-out hover:animate-text hover:text-[#F00000]'>
                                <Link rel="canonical" className='md:text-[16px] font-medium text-neonGreen' href={item.link}>{item.text}</Link>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div> */}
        <div className={`absolute flex md:hidden background-menu-vector-2 bg-slate-300 top-[60px] z-10 right-0 w-3/4 py-40 transition-transform duration-300 transform ${menuOpen ? 'translate-x-5/12' : 'translate-x-full'} p-4`} style={{height: 'calc(100vh - 60px)'}}>
            <div className='flex flex-col items-center justify-center md:gap-8 gap-2 w-full text-3xl'>
                
            </div>
        </div>
    </div>
  )
}

export default HamburgerMenuBlog;