import MoreBlogs from "@/components/MoreBlogs";
import ProgressBar from "@/components/ProgressBar";
import { blogs } from "@/lib/blogData/blogs";
import { website } from "@/lib/data/website";
import type { Metadata } from "next";

export const generateMetadata = async (
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> => {

  const paramsData = await params;
  const blog = blogs.find((b) => b.url === paramsData.slug);

  return {
    title: blog ? blog.title : "Blog Not Found",
    description: blog ? blog.description : "No blog content available.",
    keywords: blog ? blog.keywords : [],
    authors: [
      { name: "Suman Debnath", url: process.env.NEXT_PUBLIC_BASE_URL }
    ],
    applicationName: "SumanDebnath",
    generator: "Next.js",
    creator: "Suman Debnath",
    publisher: "Suman Debnath",

    // // 🌍 Open Graph (OG) - Social Media Sharing
    openGraph: {
      title: blog ? blog.title : "Blog Not Found",
      description: blog ? blog.description : "No blog content available.",
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: "SumanDebnath",
      images: [
        {
          url: process.env.NEXT_PUBLIC_BASE_URL + "/images" + (blog ? blog.cover : "/og-image.png"),
          width: 1200,
          height: 630,
          alt: blog ? blog.title : "Blog Not Found",
        },
      ],
      locale: "en_US",
      type: "article",
    },

    //🐦 Twitter Card
    twitter: {
      card: "summary_large_image",
      title: blog ? blog.title : "Blog Not Found",
      description: blog ? blog.description : "No blog content available.",
      site: website.TWITTER,
      creator: website.TWITTER,
      images: [process.env.NEXT_PUBLIC_BASE_URL + "/images" + (blog ? blog.cover : "/og-image.png")],
    },

    // 📱 Mobile & Browser Settings
    robots: "index, follow", // or "noindex, nofollow"

    // 📜 Canonical URL
    //   alternates: {
    //     canonical: "https://example.com/blog/my-first-post",
    //     languages: {
    //       "en-US": "https://example.com/en/blog/my-first-post",
    //       "es-ES": "https://example.com/es/blog/my-first-post",
    //     },
    //   },

    // 🔗 Icons & App Links
    // icons: {
    //   icon: "/favicon.ico",
    //   shortcut: "/shortcut-icon.png",
    //   apple: "/apple-touch-icon.png",
    // },

    // 🏠 App Manifest
    //manifest: "/site.webmanifest",

    // 🛡️ Security & Referrer
    referrer: "no-referrer-when-downgrade",
    formatDetection: {
      telephone: false,
      address: false,
      email: false,
    },
  };
}

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
      <div className="w-full flex relative justify-center items-start md:gap-[20px] gap-[20px] min-h-[calc(100vh-80px)]">
        <div className="flex justify-between items-center max-w-[1440px] md:px-20 px-[10px] w-full">
          <ProgressBar />
          <div className="flex flex-col-reverse lg:flex-row gap-[20px] justify-center items-start w-full sm:px-5 px-2.5 sm:py-5 py-2.5">
            <MoreBlogs />
            <div className="w-full flex justify-center items-start md:p-[40px] p-[20px] bg-main-background rounded-2xl">
              {page}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog