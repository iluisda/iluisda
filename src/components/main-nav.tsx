"use client";

import { Shell } from "@/components/shell";
import ThemeToggle from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { socialsConfig } from "@/config/socials";
import { Icons } from "@/components/icons";
import Link from "next-intl/link";
import { getFlagEmoji } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MainNav = ({ locale }: { locale: string }) => {
  const getFlag = () => {
    let result;
    switch (locale) {
      case "pt":
        result = "BR";
        break;
      case "en":
        result = "US";
        break;
      default:
        result = "ES";
        break;
    }
    return result;
  };
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
              <Button size="icon" variant="ghost" asChild>
                <span>{getFlagEmoji(getFlag())}</span>
              </Button>
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
              <DropdownMenu>
                <DropdownMenuTrigger id="lang">
                  <Avatar>
                    <AvatarImage
                      src={"../../assets/meta/default.png"}
                      alt="iluisda"
                    />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>&#128069; Language</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem id="us">
                    <Link href={"/"} locale={"en"} className="font-medium">
                      {getFlagEmoji("US")} English
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem id="es">
                    <Link href={"/"} locale={"es"} className="font-medium">
                      {getFlagEmoji("ES")} Spanish
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem id="br">
                    <Link href={"/"} locale={"pt"} className="font-medium">
                      {getFlagEmoji("BR")} Portuguese
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Shell>
        </Container>
      </div>
    </header>
  );
};
export default MainNav;
