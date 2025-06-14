import MoreBlogs from "@/components/MoreBlogs";
import ProgressBar from "@/components/ProgressBar";
import { blogs } from "@/lib/blogData/blogs";

const Blog = async (
  { params }: { params: Promise<{ slug: string }>}
) => {

  const {slug} = await params;

  const blog = blogs.find((blog) => blog.url === slug)

  const page = blog?.page

  if(!page){
    <div>

    </div>
  } else{
    return (
      <div className="flex flex-col relative md:justify-center justify-end md:items-start items-center text-white md:gap-[20px] gap-[20px]" style={{minHeight: "calc(100vh - 80px)"}}>
        <ProgressBar/>
        <div className="flex flex-col-reverse lg:flex-row gap-[20px] justify-center items-start w-full max-w-[1600px] md:px-20 sm:px-5 px-2.5 sm:py-5 py-2.5">
          <MoreBlogs/>
          <div className="w-full flex justify-center items-start md:p-[40px] p-[20px] bg-main-background rounded-2xl">
            {page}
          </div>
        </div>
      </div>
    );
  }
}

export default Blog