import React from "react";
import { PageWrapper } from "@/components/common/page-wrapper";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostList from "@/components/blog/PostList";
import EmptyAnimation from "@/components/common/empty";
export async function generateMetadata() {
  return {
    title: "iluisda - Blog",
    description: "Lifestyle, maybe work and some posts that i like to share",
    openGraph: {
      title: "iluisda - Blog",
      description: "Lifestyle, maybe work and some posts that i like to share",
      images: ["/images/default.png"],
    },
  };
}
const blog = async ({ params }: { params: { locale: string } }) => {
  const posts = allPosts
    .filter((post) => post.lang === params.locale)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <React.Fragment>
      <PageWrapper>
        {posts.length ? <PostList posts={posts} /> : <EmptyAnimation />}
      </PageWrapper>
    </React.Fragment>
  );
};
export default blog;
