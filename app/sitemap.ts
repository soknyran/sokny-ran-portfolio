import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Only the homepage is listed. The /projects/* case studies are no longer linked from the site.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
