import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 CHANGE THIS after deployment
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://insurancefinder.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Cheap Car Insurance — Compare Quotes Smarter",
    template: "%s | Insurance Finder",
  },

  description:
    "Compare cheap car insurance quotes, check state minimums, and shop smarter with a personalized plan and Confidence Score.",

  keywords: [
    "cheap car insurance",
    "best car insurance",
    "auto insurance quotes",
    "compare car insurance",
    "car insurance near me",
    "student car insurance",
    "low cost auto insurance",
  ],

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Cheap Car Insurance — Compare Quotes Smarter",
    description:
      "Find cheap car insurance, compare quotes, and understand state minimums instantly.",
    siteName: "Insurance Finder",
    images: [
      {
        url: "/og.png", // 🔥 THIS IS THE IMPORTANT PART
        width: 1200,
        height: 630,
        alt: "Insurance Finder - Compare Auto Insurance Smarter",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cheap Car Insurance — Compare Quotes",
    description:
      "Compare cheap car insurance with state minimums and Confidence Score.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
