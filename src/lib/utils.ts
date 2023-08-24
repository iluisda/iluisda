import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const motion_animations = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
  },
};
export const getFlagEmoji = (countryCode:any) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char:any) =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
