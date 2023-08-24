"use client";
import React, { FC } from "react";
import Container from "./container";
import MainNav from "../main-nav";
import Footer from "../main-footer";

interface Props {
  className?: string;
  children?: React.ReactNode;
  locale: string;
}

const Layout: FC<Props> = ({ children, className, locale }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav locale={locale} />
      <main className="flex-1">
        <Container className={className}>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
