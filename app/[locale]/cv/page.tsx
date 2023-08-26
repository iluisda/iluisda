"use client";
import Grid from "@/components/common/grid";
import { Button } from "@/components/ui/button";
import React from "react";
import { Printer, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Text from "@/components/common/text";
import Heading from "@/components/common/heading";
import { PageWrapper } from "@/components/common/page-wrapper";
const cvPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("CV");
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
                  onClick={() => {}}
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
                    {t("keylanguages")}
                  </strong>: {t("languages")}
                  <br />
                  <strong className="capitalize">
                    {t("keylocation")}
                  </strong>: {t("location")}
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
        </Grid>
      </PageWrapper>
    </React.Fragment>
  );
};
export default cvPage;
