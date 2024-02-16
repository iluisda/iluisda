import SinglePost from "@/components/blog/SinglePost";
import { PageWrapper } from "@/components/common/page-wrapper";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

const Post = async ({ params }: any) => {
  const post = allPosts.filter((post) => post.slug === params.slug)[0];

  return (
    <PageWrapper>{post ? <SinglePost post={post} /> : notFound()}</PageWrapper>
  );
};
export default Post;
