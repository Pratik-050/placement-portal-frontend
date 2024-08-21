import React from "react";
import Image from "next/image";
import { dgplogo } from "@/assets";

function StudentNavbar() {
  return (
    <div className="relative bg-gray-200 z-10 flex items-center justify-between px-4 py-2 shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <Image
          src={dgplogo}
          alt="NIT Durgapur Logo"
          width={48} // Reduced width to balance with text size
          height={48}
        />
        <h1 className="text-xl font-semibold text-gray-800">
          Placement Portal
        </h1>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-gray-700 font-semibold">JD</span>
        </div>
        <span className="text-gray-800 font-medium">John Doe</span>
      </div>
    </div>
  );
}

export default StudentNavbar;
