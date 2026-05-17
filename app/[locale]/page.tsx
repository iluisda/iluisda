import { PageWrapper } from "@/components/common/page-wrapper";
import HomeContent from "@/components/home/HomeContent";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  return {
    title: "Luis Alvarez | Frontend Developer",
    description:
      "Frontend Developer specialized in React, Next.js, and iOS development. Building performant, accessible, and beautiful web experiences.",
    alternates: getAlternates("/", locale),
    openGraph: {
      title: "Luis Alvarez | Frontend Developer",
      description:
        "Frontend Developer specialized in React, Next.js, and iOS development. Building performant, accessible, and beautiful web experiences.",
      images: ["/assets/iluisda.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Luis Alvarez | Frontend Developer",
      description:
        "Frontend Developer specialized in React, Next.js, and iOS development.",
    },
  };
}

const Home = () => {
  return (
    <PageWrapper>
      <HomeContent />
    </PageWrapper>
  );
};
export default Home;
