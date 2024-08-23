import { contents } from "@/data/website";
import Image from "next/image";

export default function HeroSectionHomePage() {
  return (
    <section className="flex flex-col w-full background-grid justify-start items-center md:gap-[40px] gap-[25px] bg-custom-gradient md:p-24 px-[20px] py-[30px]">
        <div className="relative flex justify-center items-center">
            <div className="md:h-[238px] md:w-[160px] absolute z-10 right-[220px] top-[2px] animate-pulse md:flex hidden" style={{backgroundImage: "url('/images/lines1.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}/>
            <div className="md:h-[238px] md:w-[160px] absolute z-10 left-[220px] top-[2px] animate-pulse md:flex hidden" style={{backgroundImage: "url('/images/lines2.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}/>
            <button className="absolute md:subtitle text-white md:flex hidden justify-center items-center text-center right-[360px] top-[-16px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill1}
            </button>
            <button className="absolute md:subtitle text-white md:flex hidden justify-center items-center text-center left-[364px] top-[-16px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill2}
            </button>
            <button className="absolute md:subtitle text-white md:flex hidden justify-center items-center text-center right-[360px] top-[90px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill3}
            </button>
            <button className="absolute md:subtitle text-white md:flex hidden justify-center items-center text-center left-[364px] top-[90px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill4}
            </button>
            <button className="absolute md:subtitle text-white md:flex hidden justify-center items-center text-center right-[360px] top-[196px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill5}
            </button>
            <button className="absolute md:subtitle text-white md:flex hidden justify-center items-center text-center left-[364px] top-[196px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill6}
            </button>
            <Image src={`/images/myPhoto.png`} height={240} width={240} alt="Suman Debnath" className="z-10 md:h-[240px] h-[120px] md:w-[240px] w-[120px]"/>
        </div>
        <div className="flex flex-col">
            <span className="heading text-center text-neonGreen" style={{textShadow: "0px 0px 3.6px rgba(55, 247, 19, 1)"}}>{contents.name}</span>
            <span className="text text-center text-lightViolet">{contents.qualification}</span>
        </div>
        <div className="flex flex-wrap justify-between items-start md:hidden w-[320px] gap-x-[50px] gap-y-[20px]">
            <button className="subtitle text-white flex justify-center items-center text-center right-[360px] top-[-16px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill1}
            </button>
            <button className="subtitle text-white flex justify-center items-center text-center left-[364px] top-[-16px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill2}
            </button>
            <button className="subtitle text-white flex justify-center items-center text-center right-[360px] top-[90px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill3}
            </button>
            <button className="subtitle text-white flex justify-center items-center text-center left-[364px] top-[90px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill4}
            </button>
            <button className="subtitle text-white flex justify-center items-center text-center right-[360px] top-[196px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill5}
            </button>
            <button className="subtitle text-white flex justify-center items-center text-center left-[364px] top-[196px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill6}
            </button>
        </div>
        <span className="md:w-[1066px] text md:text-left text-center text-veryLightViolet">{contents.bio}</span>
        <a href="/files/resume.pdf" download className="mt-8 transition-all duration-300 ease-in-out hover:filter hover:brightness-125">
            <button className="subtitle animate-bounce text-white flex justify-center items-center text-center md:w-[273.41px] md:h-[52.41px] w-[120px] h-[25px]" style={{backgroundImage: "url('/images/downloadVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                {contents.download}
            </button>
        </a>
    </section>
  );
}