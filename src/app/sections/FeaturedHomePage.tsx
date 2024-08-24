import CarouselFeatures from "@/components/CarouselFeatures";
import { contents, featuredImages } from "@/data/website";
import Image from "next/image";

export default function FeaturedHomePage() {

  const items = featuredImages

  return (
    <section className="flex flex-col w-full justify-start items-center md:gap-[40px] gap-[25px] md:pt-[60px] md:pb-[200px] pb-[80px] px-[20px] py-[20px]">
        <span className="heading text-white">{contents.featured}</span>
        <CarouselFeatures/>
        <div className="md:hidden flex flex-col gap-[40px] px-[20px] pt-[20px] justify-center items-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-[20px] justify-center items-center">
              <Image src={item.image} alt={'carousel1'} height={564} width={956}/>
              <span className="text-veryLightViolet text">{item.text}</span>
            </div>
          ))}
        </div>
    </section>
  );
}