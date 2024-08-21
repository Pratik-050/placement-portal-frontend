'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import InternalNavbar from "./home/sections/InternalNavbar";
import NextUI from "@/providers/NextUI";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "NIT Durgapur | Placements",
//   description: "Get Placed Soon",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const showNavbar = !pathname.includes('/dashboard');

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUI>
          {showNavbar && (<Navbar />)}
          {showNavbar && (<InternalNavbar />)}
          {children}
        </NextUI>
      </body>
    </html>
  );
}