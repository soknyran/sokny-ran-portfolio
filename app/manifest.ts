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
    background_color: "#0c0f13",
    theme_color: "#0f766e",
    icons: [
      { src: "/icon", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
