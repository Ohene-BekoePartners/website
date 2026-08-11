import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { LOGO_ICON_SRC } from "@/utils/branding";
import { SITE_NAME, SITE_URL } from "@/utils/site";

const SITE_TITLE =
  "Ohene-Bekoe & Partners | Strategic Legal Counsel for Complex Business";
const SITE_DESCRIPTION =
  "Delivering trusted legal expertise to corporations, investors, and institutions. Strategic legal counsel for complex business decisions.";

export const metadata: Metadata = {
  // Resolves every relative canonical/OG URL across the site.
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: LOGO_ICON_SRC,
    apple: LOGO_ICON_SRC,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_GB",
    images: [
      {
        url: "/logo_white_bg.png",
        width: 527,
        height: 474,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo_white_bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-sans text-foreground bg-background">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
