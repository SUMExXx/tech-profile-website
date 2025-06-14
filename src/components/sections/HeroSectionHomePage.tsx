import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function HeroSectionHomePage() {
  return (
    <section className="flex flex-col w-full background-grid justify-start items-center md:gap-[40px] gap-[25px] bg-custom-gradient md:p-24 px-[20px] py-[30px]">
        <div className="relative flex justify-center items-center">
            <div className="md:h-[238px] md:w-[160px] absolute z-10 right-[220px] top-[2px] animate-pulse md:flex hidden" style={{backgroundImage: "url('/images/lines1.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}/>
            <div className="md:h-[238px] md:w-[160px] absolute z-10 left-[220px] top-[2px] animate-pulse md:flex hidden" style={{backgroundImage: "url('/images/lines2.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}/>
            <button className="absolute md:subtitle text-main-foreground md:flex hidden justify-center items-center text-center right-[360px] top-[-16px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                FullStack Developer
            </button>
            <button className="absolute md:subtitle text-main-foreground md:flex hidden justify-center items-center text-center left-[364px] top-[-16px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Flutter Developer
            </button>
            <button className="absolute md:subtitle text-main-foreground md:flex hidden justify-center items-center text-center right-[360px] top-[90px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                UI/UX Designer
            </button>
            <button className="absolute md:subtitle text-main-foreground md:flex hidden justify-center items-center text-center left-[364px] top-[90px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Graphic Designer
            </button>
            <button className="absolute md:subtitle text-main-foreground md:flex hidden justify-center items-center text-center right-[360px] top-[196px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Media Editor
            </button>
            <button className="absolute md:subtitle text-main-foreground md:flex hidden justify-center items-center text-center left-[364px] top-[196px] md:w-[273.41px] md:h-[52.41px] transition-all duration-300 ease-in-out hover:filter hover:brightness-125" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Programmer
            </button>
            <Image src={`/images/myPhoto.png`} height={240} width={240} draggable={false} alt="Suman Debnath" className="z-10 pointer-events-none md:h-[240px] h-[120px] md:w-[240px] w-[120px]"/>
        </div>
        <div className="flex flex-col">
            <span className="heading text-center text-main-quaternary" style={{textShadow: "0px 0px 3.6px rgba(55, 247, 19, 1)"}}>Suman Debnath</span>
              <span className="text text-center text-main-secondary">Computer Science Engineer</span>
        </div>
        <div className="flex flex-wrap justify-between items-start md:hidden w-[320px] gap-x-[50px] gap-y-[20px]">
            <button className="subtitle text-main-foreground flex justify-center items-center text-center right-[360px] top-[-16px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                FullStack Developer
            </button>
            <button className="subtitle text-main-foreground flex justify-center items-center text-center left-[364px] top-[-16px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Flutter Developer
            </button>
            <button className="subtitle text-main-foreground flex justify-center items-center text-center right-[360px] top-[90px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                UI/UX Designer
            </button>
            <button className="subtitle text-main-foreground flex justify-center items-center text-center left-[364px] top-[90px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Graphic Designer
            </button>
            <button className="subtitle text-main-foreground flex justify-center items-center text-center right-[360px] top-[196px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Media Editor
            </button>
            <button className="subtitle text-main-foreground flex justify-center items-center text-center left-[364px] top-[196px] w-[127px] h-[25px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                Programmer
            </button>
        </div>
          <span className="md:w-[1066px] text md:text-left text-center text-main-tertiary">Hi! I am Suman Debnath, Undergraduate student at  Shri G. S. Institute of Technology, Indore in the department of Computer Science Engineering. I am a passionate Software Developer with a variety of creative skillset.</span>
        <Reveal className="cursor-pointer">
            <a href="/files/SumanDebnathResumeV3.pdf" download className="mt-8 transition-all duration-300 ease-in-out hover:filter hover:brightness-125 cursor-pointer">
                <button className="subtitle animate-bounce text-main-foreground flex justify-center items-center text-center md:w-[273.41px] md:h-[52.41px] w-[120px] h-[25px]" style={{backgroundImage: "url('/images/downloadVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
                    Download Resume
                </button>
            </a>
        </Reveal>
    </section>
  );
}