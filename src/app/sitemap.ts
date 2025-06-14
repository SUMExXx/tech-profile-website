import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/`, lastModified: new Date(), changeFrequency: "yearly", priority: 1.0 },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/project`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    //blogs
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/switching-to-bigger-ssd-without-losing-data`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
};

export default sitemap;