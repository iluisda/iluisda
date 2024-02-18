import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Luis Alvarez",
  description:
    "Frontend Developer | Personal Portfolio, Projects, Blog and Resume.",
  openGraph: {
    type: "website",
    url: "https://iluisda.dev",
    site_name: "iluisda",
    images: [
      {
        url: "/assets/default.png",
        width: 600,
        height: 314,
        alt: "iluisda",
      },
    ],
  },
};

export default config;
