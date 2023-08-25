import React from "react";

import Link from "next-intl/link";

import Container from "./common/container";

const paths = [
  { label: "home", href: "/" },
  { label: "blog", href: "/blog" },
  { label: "cv", href: "/cv" },
  //   { label: "tools", href: "/tools" },
];

const Footer = () => {
  return (
    <footer className="print:hidden">
      <Container className="text-gray-600 dark:text-gray-400">
        <div className="border-b my-2">
          <ul className="flex justify-start space-x-4 my-2">
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
