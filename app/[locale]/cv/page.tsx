"use client";
import Grid from "@/components/cv/grid";
import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import { Printer, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Text from "@/components/common/text";
import Heading from "@/components/common/heading";
import { PageWrapper } from "@/components/common/page-wrapper";
import { useToast } from "@/components/ui/use-toast";
import { allCVs } from "contentlayer/generated";
import Details from "@/components/cv/details";
import { getFlagEmoji, styles } from "@/lib/utils";
import { format } from "date-fns";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSwift,
  SiWordpress,
  SiAngular,
  SiNextdotjs,
  SiReact,
  SiIonic,
} from "react-icons/si";
import Link from "@/components/ui/link";
const skills = [
  {
    technology: "HTML",
    icon: "SiHtml5",
  },
  {
    technology: "CSS",
    icon: "SiCss3",
  },
  {
    technology: "Javascript",
    icon: "SiJavascript",
  },
  {
    technology: "Swift",
    icon: "SiSwift",
  },
  {
    technology: "Wordpress",
    icon: "SiWordpress",
  },
  {
    technology: "Angular",
    icon: "SiAngular",
  },
  {
    technology: "NextJS",
    icon: "SiNextdotjs",
  },
  {
    technology: "ReactJS",
    icon: "SiReact",
  },
  {
    technology: "React Native",
    icon: "SiReact",
  },
  {
    technology: "Ionic Framework",
    icon: "SiIonic",
  },
];

const cvPage = ({ params }: { params: { locale: string } }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("CV");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toast } = useToast();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filteredCVs = useMemo(() => {
    return allCVs.filter((cv) => cv.lang === params.locale);
  }, [params.locale]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const categorizedCVs = useMemo(() => {
    return filteredCVs.reduce((acc: any, cv: any) => {
      const event: any = cv.event;
      if (!acc[event]) {
        acc[event] = [];
      }
      acc[event].push(cv);
      return acc;
    }, {});
  }, [filteredCVs]);

  const handlePrint = () => {
    if (typeof window !== "undefined") window?.print();
  };
  const handleCopy = () => {
    let string = "";
    Object.entries(categorizedCVs)
      .reverse()
      .map(([eKey, eValue]) => {
        string += `# ${eKey}\n`;
        (eValue as any).map((cv: any) => {
          string += `Time range: ${format(
            new Date(cv.from),
            "MMM yyyy"
          )}-${format(new Date(cv.to), "MMM yyyy")}\nPosition: ${
            cv.what
          }\nCompany: ${cv.where}\n${cv.body.raw}\n${" "}\n`;
        });
      });
    navigator.clipboard.writeText(string);
    toast({
      title: "Copied!",
      description: "CV has been copied to clipboard.",
    });
  };
  return (
    <PageWrapper>
      <Grid>
        <Grid.Left />
        <Grid.Right>
          <div className="flex justify-between">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-normal lg:text-4xl ">
              Curriculum Vitae
            </h1>
            <div className="flex items-stretch gap-8 print:hidden">
              <Button
                className="self-center"
                size="icon"
                variant="ghost"
                onClick={() => {
                  handlePrint();
                }}
                // disabled
              >
                <Printer className="h-5 w-5" />
              </Button>

              <Button
                className="self-center"
                size="icon"
                variant="ghost"
                onClick={() => {
                  handleCopy();
                }}
                // disabled
              >
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Grid.Right>
        <Grid.Left>
          <Text>{t("talk")}</Text>
          <Text variant="light">
            <Link
              href={"mailto:iluisda.dev@icloud.com"}
              target="_blank"
              rel="noopener"
            >
              {"Email"}
            </Link>
          </Text>
          <div className="md:-mx-6 my-5 h-px bg-gray-300/50 dark:bg-gray-700/50" />
          <Text>{`Skills`}</Text>
          <div className="flex flex-wrap items-center justify-end mt-5">
            {skills.map(({ technology, icon }) => (
              <div key={technology} className="flex items-center mb-4">
                <span className="ml-4">{renderIcon(icon)}</span>
                <p className="ml-2">{technology}</p>
              </div>
            ))}
          </div>
        </Grid.Left>
        <Grid.Right>
          <Heading> Luis Alvarez</Heading>
          <div className="flex flex-col md:flex-row gap-3 justify-between mb-6">
            <div>
              <Text className="text-gray-800 dark:text-gray-200 italic font-light after:content-['”'] after:ml-0.5 after:text-gray-500 before:content-['“'] before:mr-0.5 before:text-gray-500">
                {t("description")}
              </Text>
            </div>
            <div className="-order-1 md:order-2 self-center flex-shrink-0 h-40 w-40 relative rounded-full overflow-hidden">
              <Image
                src="/assets/iluisda.jpeg"
                width={500}
                height={500}
                alt="Luis Alvarez"
              />
            </div>
          </div>
          <div className={styles.prose}>
            <p className="mb-3">
              <strong className="capitalize">{t("keybirthday")}</strong>:{" "}
              {t("birthday")}
              <br />
              <strong className="capitalize">
                {t("keycitizenship")}
              </strong>: {t("citizenship")} {getFlagEmoji("VE")}
              <br />
              <strong className="capitalize">{t("keylanguages")}</strong>:{" "}
              {t("languages")}
              <br />
              <strong className="capitalize">{t("keylocation")}</strong>:{" "}
              {t("location")} {getFlagEmoji("AR")} {getFlagEmoji("BR")}
              <br />
              <strong className="capitalize">{t("keyhobbies")}</strong>:{" "}
              {t("hobbies")} &#127947; &#128692; &#128745; &#129406; &#128054;
              🎧
              <br />
            </p>
          </div>
        </Grid.Right>
        {Object.entries(categorizedCVs)
          .reverse()
          .map(([key, value]) => {
            return (
              <React.Fragment key={key}>
                <Grid.Left />
                <Grid.Right>
                  <Heading className="capitalize">
                    {key.replace(/-/g, " ")}
                  </Heading>
                  <div className="md:-mx-6 h-px bg-gray-300/50 dark:bg-gray-700/50" />
                </Grid.Right>
                {(value as any).map(({ body, ...props }: any, i: any) => (
                  <React.Fragment key={i}>
                    <Grid.Left>
                      <Details {...props} />
                    </Grid.Left>
                    <Grid.Right>
                      <div
                        className={styles.prose}
                        dangerouslySetInnerHTML={{ __html: body.html }}
                      />
                    </Grid.Right>
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          })}
      </Grid>
    </PageWrapper>
  );
};
export default cvPage;
const renderIcon = (icon: any) => {
  switch (icon) {
    case "SiHtml5":
      return <SiHtml5 />;
    case "SiCss3":
      return <SiCss3 />;
    case "SiJavascript":
      return <SiJavascript />;
    case "SiSwift":
      return <SiSwift />;
    case "SiWordpress":
      return <SiWordpress />;
    case "SiAngular":
      return <SiAngular />;
    case "SiNextdotjs":
      return <SiNextdotjs />;
    case "SiReact":
      return <SiReact />;
    case "SiIonic":
      return <SiIonic />;
    default:
      return null;
  }
};
