"use client";

import { styles } from "@/lib/utils";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";

const SingleProject = ({ project }: any) => {
  const t = useTranslations("Projects");
  return (
    <>
      <NextSeo
        title={`${project.title} | Blog`}
        description={project.excerpt}
        openGraph={{
          title: `${project.title} | Blog`,
          description: `${project.excerpt}`,
          images: [
            {
              url: `https://www.iluisda.dev${project?.image}`,
              width: 800,
              height: 600,
              alt: project.title,
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="container mx-auto max-w-screen-md py-8 flex justify-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className={"dark:text-gray-400 text-gray-600 mt-2"}>
            <time>{`${format(new Date(project.date), "MMM dd, yyyy")}`}</time>
            <span aria-hidden="true" className="mx-1">
              &middot;
            </span>
            <span>
              {Math.round(project.readingTime.minutes)} {t("reads")}
            </span>
          </p>
          <Image
            width={500}
            height={500}
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg my-10 "
          />
          <div
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: project.body.html }}
          />
        </div>
      </div>
    </>
  );
};
export default SingleProject;
