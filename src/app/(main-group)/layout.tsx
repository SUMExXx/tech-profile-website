import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { webData } from "@/data/website";

const jetBrainMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: webData.title,
  description: webData.description,
  keywords: webData.keywords,
  other: {
    "google-adsense-account": "ca-pub-2246017499375159",
    "google-site-verification": "u_ExZBcFIU6jz7OJ4L7bORzuQbPqF3MRksHVsMlWQv4"
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainMono.className} antialiased`}>
        {/* <StateProvider>
          <AuthContextProvider> */}
            <Navbar/>
            <div className='mt-[60px] md:mt-[80px] text-black'>
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
