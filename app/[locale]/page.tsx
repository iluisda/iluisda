"use client";
import { PageWrapper } from "@/components/common/page-wrapper";
import Hero from "@/components/main-home";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  const t = useTranslations("Index");
  return (
    <React.Fragment>
      <PageWrapper>
        <Hero
          welcome={t("welcome")}
          sign={t("sign")}
          sentence={t("sentence")}
        />
        {/* <div className="grid gap-4 grid-cols-2 mt-10">
          <div className="blur-none">
            <Card className="backdrop-blur-xl bg-white/30 ">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="backdrop-blur-xl bg-white/30 ">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="backdrop-blur-xl bg-white/30 ">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="backdrop-blur-xl bg-white/30 ">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div> */}
      </PageWrapper>
    </React.Fragment>
  );
};
export default Home;
