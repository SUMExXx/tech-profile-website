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
    <div className="flex flex-col items-center justify-start text-white">
      {slug}
    </div>
  );
}
