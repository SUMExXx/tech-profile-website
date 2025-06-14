import HeroSectionHomePage from "@/components/sections/HeroSectionHomePage";
import SkillsScrollHomePage from "@/components/sections/SkillsScrollHomePage";
import FeaturedHomePage from "@/components/sections/FeaturedHomePage";
import EducationHomePage from "@/components/sections/EducationHomePage";
import SkillsHomePage from "@/components/sections/SkillsHomePage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <HeroSectionHomePage/>
      <SkillsScrollHomePage/>
      <FeaturedHomePage/>
      <div className="w-full relative flex justify-center items-end">
        <div className="md:absolute static md:bottom-[-1px] translate-y-[1px] md:left-0 flex justify-center items-center md:h-[89px] h-[36px] w-[200px] md:w-[490px] heading text-white" style={{background: "url('/images/titleVector.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
          Experience
        </div>
      </div>
      <EducationHomePage/>
      <SkillsHomePage/>
    </main>
  );
}
