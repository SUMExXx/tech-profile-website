import { website } from "@/data/website";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    return[
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL || website.w3url}`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL || website.w3url}/projects`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL || website.w3url}/experience`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL || website.w3url}/blogs`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL || website.w3url}/blogs/switching-to-bigger-ssd-without-losing-data`,
            lastModified: new Date(),
            priority: 0.70,
        },
    ]
}