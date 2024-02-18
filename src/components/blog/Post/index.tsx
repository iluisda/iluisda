import { format } from "date-fns";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
const PostArticle = ({ post }: any) => {
  const t = useTranslations("Blog");
  return (
    <div className="group cursor-pointer flex items-center justify-start overflow-hidden transition-all hover:scale-105 relative opacity-100 transform perspective-1200 my-10">
      <div className="container mx-auto flex flex-col sm:flex-row items-start">
        <div className="w-full sm:w-auto">
          <Link
            className="block w-full overflow-hidden"
            href={`/${post.lang}/blog/${post.slug}`}
          >
            <div className="p-4">
              <p className="text-gray-600">
                <time>{`${format(new Date(post.date), "MMM dd, yyyy")}`}</time>
                <span aria-hidden="true" className="mx-1">
                  &middot;
                </span>
                <span>
                  {Math.round(post.readingTime.minutes)} {t("reads")}
                </span>
              </p>
              <h2 className="text-black font-bold">{post.title}</h2>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          </Link>
        </div>
        <div className="custom-w-rem custom-h-rem ml-4 hidden sm:block">
          <Link
            className=" overflow-hidden"
            href={`/${post.lang}/blog/${post.slug}`}
          >
            <Image
              width={175}
              height={100}
              src={post.image || "/images/default_cover.jpg"}
              {...(post.image && {
                placeholder: "blur",
                blurDataURL: post.image,
              })}
              alt={post.image || "Thumbnail"}
              priority={true}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostArticle;
