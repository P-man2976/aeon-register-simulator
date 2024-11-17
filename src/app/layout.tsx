import type { Metadata } from "next";
import { Mochiy_Pop_One } from "next/font/google";
import "./globals.css";

const mochiyPopOne = Mochiy_Pop_One({
  subsets: ["latin"],
  variable: "--font-mochiy",
  weight: "400",
});

export const metadata: Metadata = {
  title: "まいばすけっと セルフレジシミュレーター",
  description: "まいばすけっとのセルフレジの操作を疑似体験できます",
  openGraph: {
    title: "まいばすけっと セルフレジシミュレーター",
    description: "まいばすけっとのセルフレジの操作を疑似体験できます",
    type: "website",
    url: "https://aeon-register-simulator.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mochiyPopOne.variable} antialiased`}>{children}</body>
    </html>
  );
}
