import Navbar from "@/components/nav-bar";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie Database",
  description: "A simple movie database application",
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
        <Navbar />
        <ReactQueryProvider>
          <div className="mx-auto flex w-full max-w-7xl grow flex-col gap-5 p-5">
            {children}
          </div>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
