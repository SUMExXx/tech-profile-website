import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { navbarLinks, contents, socials, website } from '@/data/website';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Menu from '@mui/icons-material/Menu';
import Logo from '../../../components/Logo';
import HamburgerMenu from './HamburgerMenu';

// import Menu from './Menu';

const Navbar = () => {



  return (
    <nav className='z-50 flex w-full fixed top-0 justify-between md:h-[80px] h-[60px] bg-grey md:px-[80px] p-[10px]' id='navbar_container'>
        
        <Link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL || '/'} className='flex items-center gap-2 md:gap-4'>
            <div className='flex items-center md:gap-[10px]'>
                {/* <Image src={'/images/sd.png'} width={54.55} height={30} alt={'GSPH logo'} className='md:w-[54.55px] md:h-[30px] w-[36.36px] h-[20px]'></Image> */}
                <Logo className='md:w-[54.55px] md:h-[30px] w-[36.36px] h-[20px]' fontSize='inherit' height={54.55} width={30}/>
                <span className='md:text-2xl font-bold text-neonGreen md:flex hidden'>{contents.name}</span>
            </div>
        </Link>

        
        <ul className='items-center md:gap-[40px] gap-2 font-medium lg:flex hidden'>
            {
                navbarLinks.map(item => (
                    <li key={crypto.randomUUID()} className='transition ease-in-out hover:animate-text hover:text-[#F00000]'>
                        <Link rel="canonical" className='md:text-[16px] font-medium text-neonGreen' href={item.link}>{item.text}</Link>
                    </li>
                ))
            }
        </ul>

        <div className='flex justify-center items-center gap-[20px]'>
            <ul className='items-center md:gap-[20px] gap-[10px] flex'>
                <li className='flex justify-center items-center transition ease-in-out hover:animate-text hover:text-[#F00000]'>
                    <Link rel="canonical" target='_blank' className='md:p-[10px] p-[6px] flex justify-center items-center rounded-full bg-violet outline md:outline-4 outline-2 outline-lightViolet md:-outline-offset-4 -outline-offset-2' href={socials.linkedin}>
                        <LinkedInIcon className='md:h-[24px] md:w-[24px] h-[16px] w-[16px]' sx={{color: 'white'}}/>
                    </Link>
                </li>
                <li className='flex justify-center items-center transition ease-in-out hover:animate-text hover:text-[#F00000]'>
                    <Link rel="canonical" target='_blank' className='md:p-[10px] p-[6px] flex justify-center items-center rounded-full bg-violet outline md:outline-4 outline-2 outline-lightViolet md:-outline-offset-4 -outline-offset-2' href={socials.instagram}>
                        <InstagramIcon className='md:h-[24px] md:w-[24px] h-[16px] w-[16px]' sx={{color: 'white'}}/>
                    </Link>
                </li>
                <li className='flex justify-center items-center transition ease-in-out hover:animate-text hover:text-[#F00000]'>
                    <Link rel="canonical" target='_blank' className='md:p-[10px] p-[6px] flex justify-center items-center rounded-full bg-violet outline md:outline-4 outline-2 outline-lightViolet md:-outline-offset-4 -outline-offset-2' href={socials.github}>
                        <GitHubIcon className='md:h-[24px] md:w-[24px] h-[16px] w-[16px]' sx={{color: 'white'}}/>
                    </Link>
                </li>
                <li className='flex justify-center items-center transition ease-in-out hover:animate-text hover:text-[#F00000]'>
                    <Link rel="canonical" className='md:p-[10px] p-[6px] flex justify-center items-center  bg-violet outline md:outline-4 outline-2 outline-lightViolet md:-outline-offset-4 -outline-offset-2' href={process.env.NEXT_PUBLIC_BLOG_URL || website.blogUrl}>
                        <span className='md:text-[16px] text-[12px] font-medium text-white'>{contents.blogs}</span>
                    </Link>
                </li>
            </ul>
            <div className='flex justify-center items-center md:hidden' title='hamburgerMenu'>
                <HamburgerMenu/>
            </div>
            
        </div>
        
    </nav>
  )
}

export default Navbar