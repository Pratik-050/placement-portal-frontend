import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClasses = (href) =>
    `block ${pathname === href ? "font-bold text-white" : "text-gray-300"}`;

  return (
    <aside className="bg-[#021738] w-64 min-h-screen text-white">
      <nav className="space-y-6 mt-8 p-4">
        <Link href="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link href="/students/register" className={linkClasses("/students/register")}>
          Registration
        </Link>
        <div className="ml-4 space-y-2">
          <Link href="/dashboard/profile" className={linkClasses("/dashboard/profile")}>
            Profile Update
          </Link>
          <Link href="/dashboard/upload-cv" className={linkClasses("/dashboard/upload-cv")}>
            CV Upload
          </Link>
          <Link href="/dashboard/preferences" className={linkClasses("/dashboard/preferences")}>
            Update Preferences
          </Link>
        </div>
        <Link href="/dashboard/application" className={linkClasses("/dashboard/application")}>
          Job Application
        </Link>
        <Link href="/dashboard/announcements" className={linkClasses("/dashboard/announcements")}>
          Announcements
        </Link>
        <Link href="/dashboard/help" className={linkClasses("/dashboard/help")}>
          Help
        </Link>
      </nav>
    </aside>
  );
}
