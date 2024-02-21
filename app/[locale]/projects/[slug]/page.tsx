import { PageWrapper } from "@/components/common/page-wrapper";
import SingleProject from "@/components/projects/SingleProject";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }: any) {
  const project = allProjects.filter(
    (project) => project.slug === params.slug
  )[0];
  return {
    title: `${project.title} | Blog`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
    },
  };
}

const Post = async ({ params }: any) => {
  const project = allProjects.filter(
    (project) => project.slug === params.slug
  )[0];
  return (
    <PageWrapper>
      {project ? <SingleProject project={project} /> : notFound()}
    </PageWrapper>
  );
};
export default Post;
