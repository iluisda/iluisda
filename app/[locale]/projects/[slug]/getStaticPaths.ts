import { allProjects } from "contentlayer/generated";

export async function getStaticPaths() {
  return {
    paths: allProjects.map(({ slug, lang }) => ({
      params: { slug, locale: lang },
    })),
    fallback: false,
  };
}
