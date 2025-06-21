/* eslint-disable @next/next/no-sync-scripts */
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen Viet Hoang Nam",
  description:
    "Official portfolio of Nguyen Viet Hoang Nam, who is a Java Developer Intern at Momo and Human-Computer Interaction researcher focused on AI, AR/VR, and computer vision. Explore his research, conference activities, and technical projects.",
  keywords: [
    "Nguyen Viet Hoang Nam",
    "Viet Hoang Nam Nguyen",
    "Hoang Nam Java Developer",
    "VietFood67",
    "Java Developer at Momo",
    "Vietnam",
    "Viet Nam",
    "Java Developer Intern",
    "Momo intern",
    "VietFood57",
    "FoodDetector",
    "Vietnamese Food Detection",
    "Extended Reality (XR)",
    "VR",
    "HCI",
    "Human Computer Interaction",
    "Computer Vision",
    "International University - VNU HCMC",
    "research",
    "publications",
  ],
  authors: [
    {
      name: "Nguyen Viet Hoang Nam",
      url: "https://nguyenviethoangnam.vercel.app",
    },
  ],
  openGraph: {
    title: "Nguyen Viet Hoang Nam",
    description:
      "Nguyen Viet Hoang Nam is a Java Developer Intern and Human-Computer Interaction researcher focused on AI, AR/VR, and computer vision. Explore his research, conference activities, and technical projects.",
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
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Nguyen Viet Hoang Nam",
    description:
      "Professional portfolio and projects by Nguyen Viet Hoang Nam, including food recognition, AI models, human-computer interaction (HCI) and UX research.",
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
        <meta
          name="google-site-verification"
          content="DLQynTNxtIEMkwQsdYJKjaNoUlNJ9743mam6YgYMWSA"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:image"
          content="https://nguyenviethoangnam.vercel.app/og-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://nguyenviethoangnam.vercel.app/og-image.jpg"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
