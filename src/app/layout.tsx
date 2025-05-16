import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen Viet Hoang Nam | Research & Publications",
  description:
    "Official portfolio of Nguyen Viet Hoang Nam, showcasing academic publications, research in HCI and computer vision, and user-centered design projects.",
  keywords:
    "Nguyen Viet Hoang Nam, HCI, Human Computer Interaction, Computer Vision, UX, VietFood67, FoodDetector, IU, research, publications",
  authors: [
    {
      name: "Nguyen Viet Hoang Nam",
      url: "https://nguyenviethoangnam.vercel.app",
    },
  ],
  openGraph: {
    title: "Nguyen Viet Hoang Nam | Research & Publications",
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
    title: "Nguyen Viet Hoang Nam | Research & Publications",
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
      <body>
        {/* <header className="p-4 shadow-md">
          <nav className="max-w-4xl mx-auto">
            <Link href="/" className="font-bold text-lg">
              Nguyen Viet Hoang Nam
            </Link>
          </nav>
        </header> */}
        <main>{children}</main>
        {/* <footer className="text-center text-sm text-gray-500 mt-12 py-6">
          © {new Date().getFullYear()} Nguyen Viet Hoang Nam. All rights
          reserved.
        </footer> */}
      </body>
    </html>
  );
}
