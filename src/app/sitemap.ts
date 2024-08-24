import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    return[
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/experience`,
            lastModified: new Date(),
            priority: 0.80,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
            lastModified: new Date(),
            priority: 0.80,
        },
    ]
}