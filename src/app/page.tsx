import { contents, skills } from "@/data/website";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <section className="flex flex-col w-full background-grid justify-start items-center gap-[40px] bg-custom-gradient md:p-24">
        <div className="relative">
          <div className="md:h-[238px] md:w-[160px] absolute z-10 right-[220px] top-[2px] animate-pulse" style={{backgroundImage: "url('/images/lines1.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}/>
          <div className="md:h-[238px] md:w-[160px] absolute z-10 left-[220px] top-[2px] animate-pulse" style={{backgroundImage: "url('/images/lines2.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}/>
          <button className="absolute subtitle text-white flex justify-center items-center text-center right-[360px] top-[-16px] md:w-[273.41px] md:h-[52.41px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill1}
          </button>
          <button className="absolute subtitle text-white flex justify-center items-center text-center left-[364px] top-[-16px] md:w-[273.41px] md:h-[52.41px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill2}
          </button>
          <button className="absolute subtitle text-white flex justify-center items-center text-center right-[360px] top-[90px] md:w-[273.41px] md:h-[52.41px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill3}
          </button>
          <button className="absolute subtitle text-white flex justify-center items-center text-center left-[364px] top-[90px] md:w-[273.41px] md:h-[52.41px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill4}
          </button>
          <button className="absolute subtitle text-white flex justify-center items-center text-center right-[360px] top-[196px] md:w-[273.41px] md:h-[52.41px]" style={{backgroundImage: "url('/images/leftSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill5}
          </button>
          <button className="absolute subtitle text-white flex justify-center items-center text-center left-[364px] top-[196px] md:w-[273.41px] md:h-[52.41px]" style={{backgroundImage: "url('/images/rightSkillVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            {contents.skill6}
          </button>
          <Image src={`/images/myPhoto.png`} height={240} width={240} alt="Suman Debnath" className="z-10"/>
        </div>
        <div className="flex flex-col">
          <span className="heading text-center text-neonGreen" style={{textShadow: "0px 0px 3.6px rgba(55, 247, 19, 1)"}}>{contents.name}</span>
          <span className="text text-center text-lightViolet">{contents.qualification}</span>
        </div>
        <span className="md:w-[1066px] text text-veryLightViolet">{contents.bio}</span>
        <a href="/files/resume.pdf" download className="mt-8">
          <button className="subtitle animate-bounce text-white flex justify-center items-center text-center left-[364px] top-[196px] md:w-[273.41px] md:h-[52.41px]" style={{backgroundImage: "url('/images/downloadVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
              {contents.download}
          </button>
        </a>
      </section>
      <section className="flex w-full justify-center items-center bg-black overflow-hidden inline-flex flex-nowrap">
        <div className="flex justify-start items-center w-full md:p-[20px] md:gap-[10px] animate-infinite-scroll">
          {
            skills.map((item) => (
              <div key={crypto.randomUUID()} className="md:py-[10px] md:px-[16px] rounded-full outline outline-1 -outline-offset-1 outline-violet text text-white flex justify-center items-center">
                {item}
              </div>
            ))
          }
          {
            skills.map((item) => (
              <div key={crypto.randomUUID()} className="md:py-[10px] md:px-[16px] rounded-full outline outline-1 -outline-offset-1 outline-violet text text-white flex justify-center items-center">
                {item}
              </div>
            ))
          }
        </div>
      </section>
    </main>
  );
}
