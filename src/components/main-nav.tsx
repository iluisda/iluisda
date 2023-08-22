"use client";

import Link from "next/link";
import { Shell } from "./shell";
import ThemeToggle from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "./common/container";
import { Button } from "./ui/button";
import { socialsConfig } from "@/config/socials";
import { Icons } from "./icons";

const MainNav = () => {
  return (
    <header className="w-full h-14 print:hidden z-10">
      <div className="fixed w-full backdrop-blur-xl dark:backdrop-blur-md ">
        <Container className="flex items-center justify-between space-x-3 px-0 py-0">
          <Shell className="bg-background/70 flex w-full items-center justify-between px-3 pt-2 backdrop-blur-lg md:px-6 md:pt-2">
            <Link href="/" className="font-medium">
              <span className="text-gray-500 dark:text-gray-400">i</span>
              luisda
            </Link>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <ul className="flex gap-2">
                {socialsConfig.map(({ title, href, icon }) => {
                  const Icon = Icons[icon];
                  return (
                    <li key={title} className="w-full">
                      <Button size="icon" variant="ghost" asChild>
                        <a href={href} target="_blank" rel="noreferrer">
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </li>
                  );
                })}
              </ul>
              <Avatar
              //   style={{ backgroundColor: "rgba(0, 0, 0, 0.24)" }}
              >
                <AvatarImage src={"assets/meta/default.png"} alt="iluisda" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
            </div>
          </Shell>
        </Container>
      </div>
    </header>
  );
};
export default MainNav;
