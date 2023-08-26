"use client";
import React from "react";
import { PageWrapper } from "@/components/common/page-wrapper";
import RiveComponent, { Alignment, Fit, Layout } from "@rive-app/react-canvas";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
const blog = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log(posts);
  return (
    <React.Fragment>
      <PageWrapper>
        <RiveComponent
          src="../../floating_astro.riv"
          className="h-screen max-h-[30rem]"
          layout={
            new Layout({
              fit: Fit.Contain,
              alignment: Alignment.TopCenter,
            })
          }
        />
      </PageWrapper>
    </React.Fragment>
  );
};
export default blog;
