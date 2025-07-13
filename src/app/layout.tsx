import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"


import Link from "next/link";
import { FaGithub, FaUser, FaProjectDiagram, FaCode, FaBriefcase, FaEnvelope, FaBook, FaChartBar, FaGraduationCap, FaExternalLinkAlt, FaCog } from "react-icons/fa";
import SectionSearchCombobox from "../components/ui/SectionSearchCombobox";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Abdi's Portfolio",
  description: "Abdi's portfolio",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "https://drive.google.com/file/d/1fqCcDc2Rbrd-mviQbuoKTI1LBxO5p0Kk/view?usp=drive_link", external: true, icon: <FaExternalLinkAlt className="ml-1 inline text-xs" /> },
];

const sectionLinks = [
  { name: "Introduction", href: "/", icon: <FaBook className="mr-2" /> },
  { name: "About Me", href: "/about", icon: <FaUser className="mr-2" /> },
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram className="mr-2" /> },
  { name: "Skills & Tools", href: "/skills", icon: <FaCode className="mr-2" /> },
  { name: "Experience", href: "/experience", icon: <FaBriefcase className="mr-2" /> },
  { name: "Education", href: "/education", icon: <FaGraduationCap className="mr-2" /> },
  { name: "Contact", href: "/contact", icon: <FaEnvelope className="mr-2" /> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // For active section highlight in sidebar
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${outfit.variable} antialiased min-h-screen font-sans overflow-x-hidden mx-2 sm:mx-4 md:mx-8 lg:mx-12`}
        style={{ fontFamily: 'Outfit, var(--font-outfit), system-ui, sans-serif', fontSize: "1.08rem", letterSpacing: "0.01em" }}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
        <ThemeProvider attribute="class" defaultTheme="dark"  disableTransitionOnChange>
          <div className="relative min-h-screen flex">
           
            <div className="w-px bg-neutral-700 h-full fixed left-2 sm:left-4 md:left-8 lg:left-20 top-0 z-40" />
            <div className="w-px bg-neutral-700 h-full fixed right-2 sm:right-4 md:right-8 lg:right-20 top-0 z-40" />
            
            <div className="flex-1 mx-auto w-full max-w-[1600px] relative z-0">
              <Header navLinks={navLinks} sectionLinks={sectionLinks} />
              <Sidebar sectionLinks={sectionLinks} />
              <div className="main-bg min-h-screen w-full md:pl-60 ">
                <main className="pt-14 pb-20 min-h-[80vh] w-full px-2 sm:px-4 md:px-20 lg:px-20" style={{ minHeight: '80vh' }}>
                  {children}
                </main> 
                <Toaster />
              </div>
            </div>
           
            <div className="w-px bg-neutral-700 h-full fixed right-0 top-0 z-40" />
          </div>
         
        </ThemeProvider>
      </body>
    </html>
  );
}
