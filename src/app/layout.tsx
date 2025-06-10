import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShowcaseNavbar } from "@/components/ShowcaseNavbar";
import { ScreenSizeDEVTOOL } from "@/components/ui/ScreenSizeDEVTOOL";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BioHalo - The Biohalogenation Company",
  description:
    "Replacing PFAS with sustainable, high-performance biofluorinated materials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <meta name="color-scheme" content="light only" />
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
        {/* rest of your scripts go under */}
      </head>
      <body className="min-h-screen min-w-screen bg-lightGrey text-darkGrey font-sans antialiased">
        <div className="fixed top-0 left-0 w-full z-[100]">
          {/* <Header /> */}
          <ShowcaseNavbar />
        </div>
        <main className="pt-0">{children} 
        <ScreenSizeDEVTOOL />
        </main>
        <Footer />
      </body>
    </html>
  );
}
