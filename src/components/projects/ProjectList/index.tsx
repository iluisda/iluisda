"use client";
import Heading from "@/components/common/heading";
import { useTranslations } from "next-intl";
import React from "react";
import ProjectArticle from "../Project";

const ProjectList = ({ projects }: any) => {
  const t = useTranslations("Projects");
  return (
    <React.Fragment>
      <h1 className="capitalize flex justify-center scroll-m-20 text-3xl font-extrabold tracking-normal lg:text-4xl">
        {t("title")}
      </h1>
      <Heading as="h4" className="flex justify-center text-center">
        {t("subtitle")}
      </Heading>
      <div className="mt-20">
        {projects.map((project: any) => {
          return (
            <ProjectArticle
              key={project._meta.path}
              project={project}
            ></ProjectArticle>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default ProjectList;
