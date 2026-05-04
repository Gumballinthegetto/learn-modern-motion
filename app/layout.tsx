import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import BackgroundGrid from "@/components/BackgroundGrid";
import { MobileNavbarProvider } from "@/provider/MobileNavbarProvider";
import Footer from "@/components/Footer";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Nanas Lab | Implementation-First Motion Library",
  description: "A specialized laboratory by Nanas Corp exploring advanced Motion v12 implementations and modern web animation patterns.",
  keywords: ["motion", "animations", "nanas lab", "nanas corp", "react", "motion design", "UI animations", "implementation"],
  authors: [{ name: "Nanas Corp." }],
  openGraph: {
    title: "The Nanas Lab | Implementation-First Motion Library",
    description: "Exploring the depths of Motion v12 and modern web animation patterns through precision-engineered implementations.",
    type: "website",
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
        className={`${lexendDeca.variable} antialiased`}
      >
        <MobileNavbarProvider>
          <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
            <BackgroundGrid />
            <header>
              <Navbar />
            </header>
            <main className="relative z-10 flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </MobileNavbarProvider>
      </body>
    </html>
  );
}
