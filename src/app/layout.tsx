import ContactDialog from "@/components/ContactDialog";
import Footer from "@/components/Footer";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
import NavBar from "@/components/NavBar";
import ThemeProvider from "@/components/ThemeProvider";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Andrea Cardinale - Web Enginner",
  description: "Andrea Cardinale Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalyticsWrapper />

      <body
        className={`${montserrat.variable} font-mont text-dark dark:text-light bg-fixed bg-gradient-to-bl dark:from-slate-950 dark:to-purple-950 dark:via-violet-950 from-slate-200 to-purple-300 via-violet-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ContactDialog />
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
