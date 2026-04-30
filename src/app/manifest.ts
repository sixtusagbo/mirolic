import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MIROLIC ENTERPRISE — Software Development & Cloud Services",
    short_name: "MIROLIC",
    description:
      "Custom software, web and mobile applications, cloud services, and intranet solutions by MIROLIC ENTERPRISE.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    categories: ["business", "productivity", "developer"],
    lang: "en",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
