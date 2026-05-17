import { getBaseUrl } from "@/lib/seo";

export function JsonLd() {
  const baseUrl = getBaseUrl();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Luis Alvarez",
        givenName: "Luis",
        familyName: "Alvarez",
        jobTitle: "Frontend Developer",
        url: baseUrl,
        sameAs: [
          "https://github.com/iluisda",
          "https://linkedin.com/in/iluisda",
        ],
        email: "iluisda.dev@icloud.com",
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Swift",
          "iOS Development",
          "Node.js",
          "Tailwind CSS",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Luis Alvarez | Frontend Developer",
        description:
          "Frontend Developer specialized in React, Next.js, and iOS development. Building performant and accessible web experiences.",
        publisher: { "@id": `${baseUrl}/#person` },
        inLanguage: ["en", "es", "pt"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
