/* eslint-disable @next/next/no-sync-scripts */
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen Viet Hoang Nam",
  description:
    "Official portfolio of Nguyen Viet Hoang Nam, showcasing academic publications, research in HCI and computer vision, and user-centered design projects.",
  keywords:
    "Nguyen Viet Hoang Nam, Viet Hoang Nam Nguyen, HCI, Human Computer Interaction, Computer Vision, UX, VietFood67, FoodDetector, IU, research, publications",
  authors: [
    {
      name: "Nguyen Viet Hoang Nam",
      url: "https://nguyenviethoangnam.vercel.app",
    },
  ],
  openGraph: {
    title: "Nguyen Viet Hoang Nam",
    description:
      "Explore the research and innovations by Nguyen Viet Hoang Nam in HCI, AI, and computer vision.",
    url: "https://nguyenviethoangnam.vercel.app",
    siteName: "Nguyen Viet Hoang Nam",
    images: [
      {
        url: "https://nguyenviethoangnam.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nguyen Viet Hoang Nam",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Viet Hoang Nam",
    description:
      "Academic portfolio and projects by Nguyen Viet Hoang Nam, including food recognition, AI models, human-computer interaction (HCI) and UX research.",
    images: ["https://nguyenviethoangnam.vercel.app/og-image.jpg"],
  },
  metadataBase: new URL("https://nguyenviethoangnam.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:image"
          content="https://nguyenviethoangnam.vercel.app/og-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://nguyenviethoangnam.vercel.app/og-image.jpg"
        />
        <script
          src="https://cdn.counter.dev/script.js"
          data-id="bb44c1ba-51bb-4788-8133-389d0b16e742"
          data-utcoffset="7"
        ></script>
      </head>
      <body>
        <main>{children}</main>
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="bb44c1ba-51bb-4788-8133-389d0b16e742"
          data-utcoffset="7"
        />
      </body>
    </html>
  );
}
