import React from "react";
import { PageWrapper } from "@/components/common/page-wrapper";
import EmptyAnimation from "@/components/common/empty";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import ProjectList from "@/components/projects/ProjectList";
const Projects = async ({ params }: { params: { locale: string } }) => {
  const projects = allProjects
    .filter((post) => post.lang === params.locale)
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
