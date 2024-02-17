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
export const cx = (...classNames: any) => classNames.filter(Boolean).join(" ");
export const styles = {
  prose:
    "prose max-w-2xl mx-auto dark:prose-invert prose-a:decoration-gray-500 hover:prose-a:decoration-black dark:hover:prose-a:decoration-white prose-img:rounded-md prose-blockquote:rounded prose-em:text-gray-900 dark:prose-em:text-white prose-em:font-light",
};