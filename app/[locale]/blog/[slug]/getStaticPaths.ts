import { allPosts } from "content-collections";

export async function getStaticPaths() {
  return {
    paths: allPosts.map(({ slug, lang }) => ({
      params: { slug, locale: lang },
    })),
    fallback: false,
  };
}
