import React from "react";

import Link from "next/link";

import Container from "./common/container";

const paths = [
  { label: "home", href: "/" },
  //   { label: "writing", href: "/writing" },
  { label: "cv", href: "/cv" },
  //   { label: "tools", href: "/tools" },
];

const Footer = () => {
  return (
    <footer className="print:hidden">
      <Container className="text-gray-600 dark:text-gray-400">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between md:items-center border-b my-2">
          <ul className="md:space-y-0 md:space-x-2 md:flex">
            {paths.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="font-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-center ">
          &#127758;
          <span className="text-xs font-light leading-none">{` Argentina | Brasil, ${new Date().getFullYear()}`}</span>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
