import SinglePost from "@/components/blog/SinglePost";
import { PageWrapper } from "@/components/common/page-wrapper";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }: any) {
  const post = allPosts.filter((post) => post.slug === params.slug)[0];
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [`www.iluisda.dev/${post.image}`],
      url: `www.iluisda.dev/${post.image}`,
      siteName: `www.iluisda.dev/${post.lang}/${post.slug}`,
    },
  };
}

const Post = async ({ params }: any) => {
  const post = allPosts.filter((post) => post.slug === params.slug)[0];
  return (
    <PageWrapper>{post ? <SinglePost post={post} /> : notFound()}</PageWrapper>
  );
};
export default Post;
