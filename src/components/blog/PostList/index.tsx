"use client";
import Heading from "@/components/common/heading";
import { PageWrapper } from "@/components/common/page-wrapper";
import { Post } from "contentlayer/generated";
import { useTranslations } from "next-intl";
import React from "react";
import PostArticle from "../Post";

const PostList = ({ posts }: any) => {
  const t = useTranslations("Blog");
  return (
    <React.Fragment>
      <PageWrapper>
        <Heading className="capitalize flex justify-center scroll-m-20 text-3xl font-extrabold tracking-normal lg:text-4xl">
          {t("title")}
        </Heading>
        <Heading as="h4" className="flex justify-center text-center">
          {t("subtitle")}
        </Heading>
        <div className="mt-10">
          {posts.map((post: Post) => {
            return <PostArticle key={post._id} post={post}></PostArticle>;
          })}
        </div>
      </PageWrapper>
    </React.Fragment>
  );
};
export default PostList;
