import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import NavbarBlog from "@/app/(blog-group)/blog/components/NavbarBlog";

const jetBrainMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suman Debnath | Blog",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2246017499375159" crossOrigin="anonymous"></script>
      </Head>
      <body className={`${jetBrainMono.className} antialiased`}>
        {/* <StateProvider>
          <AuthContextProvider> */}
            <NavbarBlog/>
            <div className='mt-[80px] md:mt-[90px] text-black'>
              {children}
            </div>
            {/* <Footer/> */}
            {/* <Spinner/> */}
          {/* </AuthContextProvider>
        </StateProvider> */}
      </body>
    </html>
  );
}