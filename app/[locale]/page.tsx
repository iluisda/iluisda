"use client";
import { PageWrapper } from "@/components/common/page-wrapper";
import Hero from "@/components/main-home";
import React from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollText, GalleryVerticalEnd, Rss } from "lucide-react";
import Text from "@/components/common/text";
import Link from "next-intl/link";

const Home = () => {
  const t = useTranslations("Index");
  const p = useTranslations("Paths");
  return (
    <PageWrapper>
      <Hero welcome={t("welcome")} sign={t("sign")} sentence={t("sentence")} />
      <div className="grid gap-4 grid-cols-4 mt-10">
        <Link href={`/cv`}>
          <Card className="backdrop-blur-xl bg-white/30 shadow">
            <CardContent className="py-3">
              <Text className="flex justify-normal">
                <ScrollText />
                <span className="ml-3 uppercase">{p("cv")}</span>
              </Text>
            </CardContent>
          </Card>
        </Link>
        <Link href={`/projects`}>
          <Card className="backdrop-blur-xl bg-white/30 shadow">
            <CardContent className="py-3">
              <Text className="flex justify-normal">
                <GalleryVerticalEnd />
                <span className="ml-3 capitalize">{p("projects")}</span>
              </Text>
            </CardContent>
          </Card>
        </Link>
        <Link href={`/blog`}>
          <Card className="backdrop-blur-xl bg-white/30 shadow">
            <CardContent className="py-3">
              <Text className="flex justify-normal">
                <Rss />
                <span className="ml-3 capitalize">{p("blog")}</span>
              </Text>
            </CardContent>
          </Card>
        </Link>
      </div>
    </PageWrapper>
  );
};
export default Home;
