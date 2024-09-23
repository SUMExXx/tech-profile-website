import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { contents, navbarLinks, socials } from '@/data/website'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import EmailInput from './SendMessage';
import SendMessage from './SendMessage';

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center md:mt-[80px] relative'>
        <div className='w-full relative md:h-[66px] h-[37px] overflow-hidden -bottom-1'>
          <Image className='absolute md:flex hidden md:left-0 -bottom-1 md:w-[481.5px] md:h-[66px] w-[273px] h-[37px]' src={'/images/footerElement.png'} alt='footer element' width={481.5} height={66}/>
          <Image className='absolute md:hidden flex right-2/3 -bottom-1 md:w-[481.5px] md:h-[66px] w-[273px] h-[37px]' src={'/images/footerElement.png'} alt='footer element' width={481.5} height={66}/>
          <Image className='absolute md:flex hidden md:right-0 -bottom-1 md:w-[481.5px] md:h-[66px] w-[273px] h-[37px] transform scale-x-[-1]' src={'/images/footerElement.png'} alt='footer element' width={481.5} height={66}/>
          <Image className='absolute md:hidden flex left-2/3 -bottom-1 md:w-[481.5px] md:h-[66px] w-[273px] h-[37px] transform scale-x-[-1]' src={'/images/footerElement.png'} alt='footer element' width={481.5} height={66}/>
        </div>
        <div className='md:gap-[20px] gap-[20px] w-full flex flex-col bg-grey' id='contact'>
          <div className='w-full flex flex-wrap text-white md:justify-between justify-center gap-[40px] md:px-[80px] px-[40px] md:pt-[80px] pt-[40px] items-start'>
            <div className='flex flex-col h-full justify-between md:items-start items-center'>
              <Link href={process.env.NEXT_PUBLIC_BASE_URL || '/'}><Image src={'/images/sd.png'} height={87} width={159} alt='SD Logo' className='md:w-[159px] md:h-[87px] w-[54px] h-[30px]'/></Link>
              <div className='md:py-[40px] py-[20px] md:gap-[40px] gap-[20px] flex flex-col md:items-start items-center'>
                <Link rel="canonical" className='md:text-[20px] font-medium text-neonGreen' href={navbarLinks[0].link}>{navbarLinks[0].text}</Link>
                <Link rel="canonical" className='md:text-[20px] font-medium text-neonGreen' href={navbarLinks[1].link}>{navbarLinks[1].text}</Link>
                <Link rel="canonical" className='md:text-[20px] font-medium text-neonGreen' href={navbarLinks[2].link}>{navbarLinks[2].text}</Link>
              </div>
            </div>
            <div className='flex flex-col h-full justify-between md:items-start items-center'>
              <h1 className='md:text-[28px] text-[20px] font-extrabold text-lightViolet'>{navbarLinks[3].text}</h1>
              <div className='flex flex-col h-full md:gap-[40px] gap-[20px] md:py-[40px] py-[20px] justify-center md:items-start items-center'>
                <Link rel="canonical" target='_blank' className='flex justify-center items-center md:gap-[20px] gap-[10px]' href={socials.github}>
                    <GitHubIcon className='md:h-[24px] md:w-[24px] h-[24px] w-[24px]' sx={{color: 'white'}}/>
                    <span className='md:subtitle text-white'>{contents.github}</span>
                </Link>
                <Link rel="canonical" target='_blank' className='flex justify-center items-center md:gap-[20px] gap-[10px]' href={socials.linkedin}>
                    <LinkedInIcon className='md:h-[24px] md:w-[24px] h-[24px] w-[24px]' sx={{color: 'white'}}/>
                    <span className='md:subtitle text-white'>{contents.linkedIn}</span>
                </Link>
                <Link rel="canonical" className='flex justify-center items-center md:gap-[20px] gap-[10px]' href={socials.phone}>
                    <CallIcon className='md:h-[24px] md:w-[24px] h-[24px] w-[24px]' sx={{color: 'white'}}/>
                    <span className='md:subtitle text-white'>{contents.phone}</span>
                </Link>
                <Link rel="canonical" className='flex justify-center items-center md:gap-[20px] gap-[10px]' href={socials.email}>
                    <MailIcon className='md:h-[24px] md:w-[24px] h-[24px] w-[24px]' sx={{color: 'white'}}/>
                    <span className='md:subtitle text-white'>{contents.email}</span>
                </Link>
              </div>
            </div>
            <div>
              <SendMessage/>
            </div>
          </div>
          <div className='flex text w-full md:px-[10px] md:py-[20px] py-[20px] justify-center items-center text-white'>
            {contents.copyright}
          </div>
        </div>
    </div>
  )
}

export default Footer