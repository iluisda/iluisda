import React from "react";
import { PageWrapper } from "@/components/common/page-wrapper";
import EmptyAnimation from "@/components/common/empty";
const Projects = async ({ params }: { params: { locale: string } }) => {
  const projects: any[] = [];
  console.log(projects);
  //   const projects = allProject
  //     .filter((post) => post.lang === params.locale)
  //     .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  //   console.log(params.locale);
  return (
    <React.Fragment>
      <PageWrapper>
        <EmptyAnimation />
        {/* {projects.length ? <PostList posts={projects} /> : <EmptyAnimation />} */}
      </PageWrapper>
    </React.Fragment>
  );
};
export default Projects;
