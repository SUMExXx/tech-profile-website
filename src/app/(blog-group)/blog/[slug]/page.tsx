import MoreBlogs from "@/app/(blog-group)/blog/components/MoreBlogs";
import { contents, skills } from "@/data/website";
import Image from "next/image";
import { blogs } from "../data/recentBlogs";
import Link from "next/link";
import { blogPages } from "../data/blogPages";
import ProgressBar from "../components/ProgressBar";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Blog({params}: PageProps) {

  const {slug} = params;

  const data = blogPages[slug]

  

  if(!data){
    <div>

    </div>
  } else{
    return (
      <div className="flex md:flex-row flex-col-reverse relative md:justify-center justify-end md:items-start items-center text-white p-[20px] md:gap-[20px] gap-[20px]" style={{minHeight: "calc(100vh - 80px)"}}>
        <ProgressBar/>
        <MoreBlogs/>
        <div className="max-w-[800px] w-full flex justify-center items-start p-[40px] bg-grey rounded-2xl">
          {data}
        </div>
      </div>
    );
  }
}
