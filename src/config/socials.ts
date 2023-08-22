import type { ValidIcon } from "@/components/icons";

type Social = {
  title: string;
  href: string;
  icon: ValidIcon;
};

export const socialsConfig: Social[] = [
  {
    title: "Linkedin",
    href: "https://linkedin.com/in/iluisda",
    icon: "linkedin",
  },
  {
    title: "GitHub",
    href: "https://github.com/iluisda",
    icon: "github",
  },
];
