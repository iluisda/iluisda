import Layout from "@/components/common/layout";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

// Font files can be colocated inside of `app`
const sfFont = localFont({
  src: [
    {
      path: "../../public/fonts/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },

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
      path: "../../public/fonts/sf-pro-display_semibold.woff2",
      weight: "600",
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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // Show a 404 error if the user requests an unknown locale
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("bg-background antialiased", sfFont.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Layout locale={locale}>{children}</Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
