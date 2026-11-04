import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Luminate Systems", short_name: "Luminate", description: "Independent software engineering studio", start_url: "/", display: "browser", background_color: "#080C17", theme_color: "#080C17", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
