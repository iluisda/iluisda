import { PageWrapper } from "@/components/common/page-wrapper";
import Hero from "@/components/main-home";
import React from "react";
import { useTranslations } from "next-intl";
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
      </PageWrapper>
    </React.Fragment>
  );
};
export default Home;
