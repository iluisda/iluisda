import CvContent from "@/components/cv/CvContent";
import { PageWrapper } from "@/components/common/page-wrapper";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  return {
    title: "Curriculum Vitae",
    description:
      "Frontend Developer specialized in React, Next.js, and iOS. Experienced in building performant web and mobile applications with modern JavaScript ecosystems.",
    alternates: getAlternates("/cv", locale),
    openGraph: {
      title: "Curriculum Vitae | Luis Alvarez",
      description:
        "Frontend Developer with expertise in React, Next.js, Swift, and cross-platform development. View my experience, skills, and projects.",
      images: ["/assets/iluisda.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Curriculum Vitae | Luis Alvarez",
      description:
        "Frontend Developer with expertise in React, Next.js, Swift, and cross-platform development.",
    },
  };
}

export default async function CvPage({ params }: any) {
  const { locale } = await params;
  return (
    <PageWrapper>
      <CvContent locale={locale} />
    </PageWrapper>
  );
}
