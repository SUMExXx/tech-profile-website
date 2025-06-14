import Reveal from "@/components/Reveal";
import { projectPreviews, webTechIcons } from "@/lib/data/website";
import Image from "next/image";
import Link from "next/link";

export default function SkillsHomePage() {
  return (
    <section className="flex flex-col w-full justify-start items-center md:gap-[40px] gap-[25px]">
        <div className="w-full relative flex flex-col justify-start items-center">
            <div className="w-full md:h-[12px] h-[6px] bg-white"/>
            <div className="md:absolute static md:top-[6px] translate-y-[-1px] md:left-[40px] flex justify-center items-center md:h-[53px] h-[37px] w-[312px] md:w-[457px] heading text-main-primary bg-black" style={{background: "url('/images/whiteSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                FULLSTACK DEV
            </div>
        </div>
        <div className="flex flex-col justify-center items-start  md:mb-[40px] mb-[20px] md:gap-[40px] gap-[20px]">
            <div className="w-full justify-center items-center flex flex-wrap md:px-[80px] px-[20px] md:gap-[40px] gap-[20px] md:mt-[80px] text-main-primary">
                {webTechIcons.map((icon, index) => <Image title={icon.alt} key={index} src={icon.url} alt={icon.alt} height={icon.height*1.5} width={icon.width*1.5} className={`hover:scale-125 duration-300 md:w-[${icon.width}px] md:h-[${icon.height}px] w-[${icon.width}px] h-[${icon.height}px]`}/>)}
            </div>
            <div className="w-full justify-center items-center text-center flex md:px-[80px] p-[20px] text-main-primary">
                <h4>I am a web developer specializing in both frontend and backend technologies, delivering industry-grade quality. Proficient in Next.js and React.js, I create dynamic user interfaces and custom UI/UX designs. With expertise in Node.js and Express.js, I build scalable applications while prioritizing SEO and incorporating advanced animations to enhance user engagement.</h4>
            </div>
            <div className="w-full justify-center items-center flex flex-wrap gap-[20px] md:mt-[20px]">
                {
                    projectPreviews.webdev.map((image, index) => 
                        <Reveal key={index}>
                            <Link className='md:h-[298px] h-[230px] md:w-[413px] w-[320px] flex flex-col md:p-[20px] p-[20px] md:gap-[20px] gap-[20px] hover:scale-90 transition-transform duration-300 scale-95' href={image.url} title={image.title}  style={{backgroundImage: `url('${image.image}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                            
                            </Link>
                        </Reveal>
                    )
                }
            </div>
        </div>
        <div className="w-full relative flex flex-col justify-start items-center">
            <div className="w-full md:h-[12px] h-[6px] bg-white"/>
            <div className="md:absolute static md:top-[6px] translate-y-[-1px] md:right-[40px] flex justify-center items-center md:h-[53px] h-[37px] w-[312px] md:w-[457px] heading text-main-primary bg-black" style={{background: "url('/images/whiteSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                FLUTTER
            </div>
        </div>
    </section>
  );
}