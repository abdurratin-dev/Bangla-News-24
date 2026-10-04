import Image from "next/image";
import Logo from "@/assets/logo(1).png";
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="bg-white">
    <div className="container mx-auto mb-5">
      <div className="grid grid-cols-3 items-center py-4 px-6">
        <div></div>
        <div className="flex items-center gap-2 justify-center">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <div>
            <h4 className="text-2xl font-bold text-red-700">Bangla News 24</h4>
            <p className="text-xs text-neutral-500">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
          <Link href="/login" className="rounded-sm hover:bg-none hover:text-red-700 text-sm font-semibold">
            সাইন ইন
          </Link>
          <Link href="/signup" className="bg-red-700 hover:bg-red-800 text-white rounded-sm py-1.5 px-3 text-sm font-semibold">
            সাইন আপ
          </Link>
        </div>
      </div>
        <Navlinks />
    </div>
    </div>
  );
};

export default Navbar;
