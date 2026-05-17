import { PageWrapper } from "@/components/common/page-wrapper";
import SingleProject from "@/components/projects/SingleProject";
import { allProjects } from "content-collections";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }: any) {
  const { slug, locale } = await params;
  const project = allProjects.find(
    (project) => project.slug === slug && project.lang === locale
  );
  return {
    title: project ? `${project.title} | Projects` : "Project",
    description: project?.excerpt ?? "",
  };
}

const Post = async ({ params }: any) => {
  const { slug, locale } = await params;
  const project = allProjects.find(
    (project) => project.slug === slug && project.lang === locale
  );
  return (
    <PageWrapper>
      {project ? <SingleProject project={project} /> : notFound()}
    </PageWrapper>
  );
};
export default Post;
