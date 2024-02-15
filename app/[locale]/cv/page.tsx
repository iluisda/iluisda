"use client";
import Grid from "@/components/cv/grid";
import { Button } from "@/components/ui/button";
import React from "react";
import { Printer, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Text from "@/components/common/text";
import Heading from "@/components/common/heading";
import { PageWrapper } from "@/components/common/page-wrapper";
import { useToast } from "@/components/ui/use-toast";
import { allCVs } from "contentlayer/generated";
import Details from "@/components/cv/details";
import { getFlagEmoji } from "@/lib/utils";

const cvPage = ({ params }: { params: { locale: string } }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("CV");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toast } = useToast();
  const cvs = allCVs.filter((cv) => cv.lang == params.locale);

  const styles = {
    prose:
      "prose dark:prose-invert prose-a:decoration-gray-500 hover:prose-a:decoration-black dark:hover:prose-a:decoration-white prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white prose-em:font-light",
  };
  return (
    <React.Fragment>
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
                  onClick={() => {}}
                  disabled
                >
                  <Printer className="h-5 w-5" />
                </Button>

                <Button
                  className="self-center"
                  size="icon"
                  variant="ghost"
                  onClick={() => {
                    toast({
                      description: "Your message has been sent.",
                    });
                  }}
                  disabled
                >
                  <Copy className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Grid.Right>
          <Grid.Left />
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
                <React.Fragment>
                  <strong className="capitalize">{t("keybirthday")}</strong>:{" "}
                  {t("birthday")}
                  <br />
                  <strong className="capitalize">
                    {t("keycitizenship")}
                  </strong>: {t("citizenship")} {getFlagEmoji("VE")}
                  <br />
                  <strong className="capitalize">
                    {t("keylanguages")}
                  </strong>: {t("languages")}
                  <br />
                  <strong className="capitalize">
                    {t("keylocation")}
                  </strong>: {t("location")} {getFlagEmoji("BR")}
                  <br />
                  <strong className="capitalize">
                    {t("keyhobbies")}
                  </strong>: {t("hobbies")} &#127947; &#128692; &#128745;
                  &#129406; &#128054;
                  <br />
                </React.Fragment>
              </p>
            </div>
          </Grid.Right>
          {cvs.map(({ body, _id, event, ...props }, i) => {
            return (
              <React.Fragment key={_id}>
                <Grid.Left />
                <Grid.Right>
                  <Heading className="capitalize">
                    {event.split("/").pop().replace(/-/g, " ")}
                  </Heading>
                  <div className="md:-mx-6 h-px bg-gray-300/50 dark:bg-gray-700/50" />
                </Grid.Right>

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
              </React.Fragment>
            );
          })}
        </Grid>
      </PageWrapper>
    </React.Fragment>
  );
};
export default cvPage;
