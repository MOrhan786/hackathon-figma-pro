import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
<<<<<<< HEAD
import FooterHandler from "@/components/FooterHandler";
=======

>>>>>>> a7519b108b369aac18848dc1718d99266fad7b80
import Header from "@/components/header";
import FooterHandler from "@/components/FooterHandler";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Car Rent Website",
  description: "Generated by Mrs Asif",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <FooterHandler />
      </body>
    </html>
  );
}
