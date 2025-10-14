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
  title: "Motion Practice - Interactive Motion Exercises",
  description: "Practice Motion animations with hands-on exercises covering transformations, transitions, and variants. Master modern web animations.",
  keywords: ["motion", "animations", "practice", "exercises", "react", "motion design", "UI animations"],
  authors: [{ name: "Nanas Corp." }],
  openGraph: {
    title: "Motion Practice - Interactive Motion Exercises",
    description: "Practice Motion animations with hands-on exercises covering transformations, transitions, and variants.",
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
          <div className="relative min-h-screen w-full">
            <BackgroundGrid />
            <header>
              <Navbar />
            </header>
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </MobileNavbarProvider>
      </body>
    </html>
  );
}
