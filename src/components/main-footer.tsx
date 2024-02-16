import React from "react";

import Link from "next-intl/link";

import Container from "./common/container";
import { useTranslations } from "next-intl";

const paths = [
  { label: "home", href: "/" },
  { label: "cv", href: "/cv" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  //   { label: "tools", href: "/tools" },
];

const Footer = () => {
  const t = useTranslations("Paths");
  return (
    <footer className="print:hidden">
      <Container className="text-gray-600 dark:text-gray-400">
        <div className="border-b border-b-neutral-600/50 my-2">
          <ul className="flex justify-start space-x-4 my-2">
            {paths.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-light hover:text-black dark:hover:text-white"
                >
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-center ">
          &#127758;
          <span className="text-xs font-light tracking-wide leading-none">{` LATAM, ${new Date().getFullYear()}`}</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
