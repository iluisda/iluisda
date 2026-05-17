import React from "react";
import { PageWrapper } from "@/components/common/page-wrapper";
import EmptyAnimation from "@/components/common/empty";
import { allProjects } from "content-collections";
import { compareDesc } from "date-fns";
import ProjectList from "@/components/projects/ProjectList";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  return {
    title: "Projects",
    description:
      "A collection of projects built with React, Next.js, Swift, and modern web technologies. From iOS apps to full-stack SaaS platforms.",
    alternates: getAlternates("/projects", locale),
    openGraph: {
      title: "Projects | Luis Alvarez",
      description:
        "A collection of projects built with React, Next.js, Swift, and modern web technologies. From iOS apps to full-stack SaaS platforms.",
      images: ["/assets/iluisda.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects | Luis Alvarez",
      description:
        "A collection of projects built with React, Next.js, Swift, and modern web technologies.",
    },
  };
}

const Projects = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const projects = allProjects
    .filter((post) => post.lang === locale)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <PageWrapper>
      {projects.length ? (
        <ProjectList projects={projects} />
      ) : (
        <EmptyAnimation />
      )}
    </PageWrapper>
  );
};
export default Projects;
