import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
const ProjectArticle = ({ project }: any) => {
  const t = useTranslations("Projects");
  return (
    <div className="group rounded-lg shadow-sm cursor-pointer flex items-center justify-start overflow-hidden transition-all hover:scale-105 relative opacity-100 transform perspective-1200 my-10">
      <div className="blur-none">
        <Card className="backdrop-blur-xl bg-white/30 ">
          <div className="container mx-auto flex flex-col sm:flex-row items-start">
            <div className="w-full sm:w-auto">
              <Link
                className="block w-full overflow-hidden"
                href={`/${project.lang}/projects/${project.slug}`}
              >
                <div className="p-4">
                  <p className="text-gray-600">
                    <time>{`${format(
                      new Date(project.date),
                      "MMM dd, yyyy"
                    )}`}</time>
                    <span aria-hidden="true" className="mx-1">
                      &middot;
                    </span>
                    <span>
                      {Math.round(project.readingTime.minutes)} {t("reads")}
                    </span>
                  </p>
                  <h2 className="text-black font-bold">{project.title}</h2>
                  <p className="text-gray-700">{project.excerpt}</p>
                </div>
              </Link>
            </div>
            <div className="custom-w-rem custom-h-rem ml-4 my-4 hidden sm:block">
              <Link
                className=" overflow-hidden"
                href={`/${project.lang}/projects/${project.slug}`}
              >
                <Image
                  width={175}
                  height={100}
                  src={project.image || "/images/default_cover.jpg"}
                  {...(project.image && {
                    placeholder: "blur",
                    blurDataURL: project.image,
                  })}
                  alt={project.image || "Thumbnail"}
                  priority={true}
                  className="w-full h-full object-cover rounded-lg"
                />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default ProjectArticle;
