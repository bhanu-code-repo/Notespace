import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notespace",
  description:
    "The notespace a connected workspace where better, faster work heppens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/vercel.svg",
        href: "/vercel.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/vercel.svg",
        href: "/vercel.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
