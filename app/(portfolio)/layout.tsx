import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Geist, Geist_Mono } from "next/font/google";
import { defineQuery } from "next-sanity";
import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import "../globals.css";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { Analytics } from "@vercel/analytics/next";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/DarkModeToggle";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { FloatingDock } from "@/components/FloatingDock";
import SidebarToggle from "@/components/SidebarToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]{
  siteTitle,
  siteDescription,
  siteKeywords,
  favicon,
  ogImage,
  twitterHandle
}`);

export async function generateMetadata(): Promise<Metadata> {
  type SiteSettings = {
    siteTitle?: string | null;
    siteDescription?: string | null;
    siteKeywords?: (string | null)[];
    favicon?: SanityImageSource | null;
    ogImage?: SanityImageSource | null;
    twitterHandle?: string | null;
  };

  const { data } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    tags: ["siteSettings"],
  });

  const settings = (data ?? null) as SiteSettings | null;

  const fallbackTitle = "Saw Mu | Portfolio";
  const title = settings?.siteTitle?.trim() || fallbackTitle;
  const description =
    settings?.siteDescription?.trim() ||
    "Personal portfolio showcasing Saw Mu's projects, experience, and skills.";

  const faviconUrl = settings?.favicon
    ? urlFor(settings.favicon).width(64).height(64).format("png").url()
    : null;

  const ogImageUrl = settings?.ogImage
    ? urlFor(settings.ogImage).width(1200).height(630).url()
    : null;

  const keywords =
    settings?.siteKeywords?.filter(
      (keyword: string | null | undefined): keyword is string =>
        Boolean(keyword && keyword.trim()),
    ) ?? undefined;

  const twitterHandle = settings?.twitterHandle?.replace(/^@/, "") || undefined;

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    keywords,
    icons: {
      icon: faviconUrl
        ? [{ url: faviconUrl, type: "image/png" }]
        : [{ url: "/favicon.svg", type: "image/svg+xml" }],
      apple: faviconUrl
        ? [{ url: faviconUrl, type: "image/png" }]
        : [{ url: "/apple-touch-icon.png", type: "image/png" }],
      shortcut: faviconUrl
        ? [{ url: faviconUrl, type: "image/png" }]
        : [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
    openGraph: {
      title,
      description,
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: twitterHandle ? `@${twitterHandle}` : undefined,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider defaultOpen={false}>
              <SidebarInset className="">{children}</SidebarInset>

              <AppSidebar side="right" />

              <FloatingDock />
              <SidebarToggle />

              {/* Mode Toggle - Desktop: bottom right next to AI chat, Mobile: top right next to burger menu */}
              <div className="fixed md:bottom-6 md:right-24 top-4 right-18 md:top-auto md:left-auto z-20">
                <div className="w-10 h-10 md:w-12 md:h-12">
                  <ModeToggle />
                </div>
              </div>
            </SidebarProvider>

            {/* Live content API */}
            <SanityLive />
          </ThemeProvider>

          <Analytics />

          {(await draftMode()).isEnabled && (
            <>
              <VisualEditing />
              <DisableDraftMode />
            </>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}
