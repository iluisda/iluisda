import SinglePost from "@/components/blog/SinglePost";
import { PageWrapper } from "@/components/common/page-wrapper";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: any) {
  const { slug, locale } = await params;
  const post = allPosts.find((p) => p.slug === slug && p.lang === locale);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: getAlternates(`/blog/${slug}`, locale),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

const Post = async ({ params }: any) => {
  const { slug, locale } = await params;
  const post = allPosts.find((p) => p.slug === slug && p.lang === locale);
  return (
    <PageWrapper>{post ? <SinglePost post={post} /> : notFound()}</PageWrapper>
  );
};
export default Post;
