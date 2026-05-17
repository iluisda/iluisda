import { PageWrapper } from "@/components/common/page-wrapper";
import SingleProject from "@/components/projects/SingleProject";
import { allProjects } from "content-collections";
import { notFound } from "next/navigation";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: any) {
  const { slug, locale } = await params;
  const project = allProjects.find(
    (p) => p.slug === slug && p.lang === locale
  );
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Projects`,
    description: project.excerpt,
    alternates: getAlternates(`/projects/${slug}`, locale),
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: project.image
        ? [{ url: project.image, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.excerpt,
      images: project.image ? [project.image] : undefined,
    },
  };
}

const Post = async ({ params }: any) => {
  const { slug, locale } = await params;
  const project = allProjects.find(
    (p) => p.slug === slug && p.lang === locale
  );
  return (
    <PageWrapper>
      {project ? <SingleProject project={project} /> : notFound()}
    </PageWrapper>
  );
};
export default Post;
