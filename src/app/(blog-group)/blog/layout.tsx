import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import NavbarBlog from "@/components/NavbarBlog";
import Script from "next/script";
import FooterBlog from "@/components/FooterBlog";

const jetBrainMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suman Debnath | Blog",
  description: "Generated by create next app",
  other: {
    "google-adsense-account": "ca-pub-2246017499375159"
  }
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainMono.className} antialiased`}>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2246017499375159" crossOrigin="anonymous"></Script>
        {/* <StateProvider>
          <AuthContextProvider> */}
            <NavbarBlog/>
            <div className='mt-[60px] md:mt-[90px] text-black'>
              {children}
            </div>
            <FooterBlog/>
            {/* <Spinner/> */}
          {/* </AuthContextProvider>
        </StateProvider> */}
      </body>
    </html>
  );
}