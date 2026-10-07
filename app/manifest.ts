import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: profile.name,
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#09090b",
    theme_color: "#4f46e5",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
