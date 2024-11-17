import type { Metadata } from "next";
import { Mochiy_Pop_One } from 'next/font/google'
import "./globals.css";

const mochiyPopOne = Mochiy_Pop_One({ subsets: ['latin'], variable: '--font-mochiy', weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mochiyPopOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
