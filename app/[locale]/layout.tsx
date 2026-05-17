import Layout from "@/components/common/layout";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { JsonLd } from "@/components/JsonLd";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://iluisda.dev"),
  title: {
    default: "Luis Alvarez | Frontend Developer",
    template: "%s | Luis Alvarez",
  },
  description:
    "Frontend Developer specialized in React, Next.js, and iOS development. Building performant, accessible, and beautiful web experiences.",
  openGraph: {
    type: "website",
    siteName: "Luis Alvarez",
    images: [
      {
        url: "/assets/iluisda.jpeg",
        width: 500,
        height: 500,
        alt: "Luis Alvarez | Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/iluisda.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "bg-gradient-to-b from-white to-gray-200 dark:from-neutral-800 dark:to-neutral-950 antialiased",
          sfFont.className
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Layout locale={locale}>
              <JsonLd />
              {children}
              <SpeedInsights />
              <Analytics />
              <Toaster />
            </Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
