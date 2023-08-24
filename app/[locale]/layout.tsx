import Layout from "@/components/common/layout";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
// Font files can be colocated inside of `app`
const sfFont = localFont({
  src: [
    {
      path: "../../public/fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "iluisda",
  description: "Frontend Developer | Personal Portfolio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screenHeightWithoutHeader bg-background antialiased",
          sfFont.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout locale={locale}>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}