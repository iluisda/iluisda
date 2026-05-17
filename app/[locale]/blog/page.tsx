import React from "react";
import { PageWrapper } from "@/components/common/page-wrapper";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "content-collections";
import PostList from "@/components/blog/PostList";
import EmptyAnimation from "@/components/common/empty";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: any) {
  const { locale } = await params;
  return {
    title: "Blog",
    description:
      "Thoughts on frontend development, iOS, React, and the tech that makes the web better. Tips, tutorials, and personal insights from a senior developer.",
    alternates: getAlternates("/blog", locale),
    openGraph: {
      title: "Blog | Luis Alvarez",
      description:
        "Thoughts on frontend development, iOS, React, and the tech that makes the web better. Tips, tutorials, and personal insights from a senior developer.",
      images: ["/assets/iluisda.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Luis Alvarez",
      description:
        "Thoughts on frontend development, iOS, React, and the tech that makes the web better.",
    },
  };
}

const blog = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const posts = allPosts
    .filter((post) => post.lang === locale)
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
