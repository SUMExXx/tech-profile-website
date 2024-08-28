import MoreBlogs from "@/app/(blog-group)/blog/components/MoreBlogs";
import { contents, skills } from "@/data/website";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Blog({params}: PageProps) {

  const {slug} = params;

  return (
    <div className="flex justify-center items-start text-white p-[20px]">
      <MoreBlogs/>
    </div>
  );
}
