'use client'

import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import NextUI from "@/providers/NextUI";

import StudentNavbar from "@/components/StudentNavbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "NIT Durgapur | Placements",
//   description: "Get Placed Soon",
// };

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextUI>
                    <StudentNavbar />
                    <div className="flex">
                        <Sidebar />
                        {children}
                    </div>
                </NextUI>
            </body>
        </html>
    );
}