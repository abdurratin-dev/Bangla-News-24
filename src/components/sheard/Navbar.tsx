'use client'
import Image from "next/image";
import Logo from "@/assets/logo(1).png";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { useState } from "react";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <div className="container mx-auto mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center py-4 px-4 sm:px-6 gap-4 md:gap-0">
          {/* Empty space - Desktop */}
          <div className="block">
            <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center">
            <Image src={Logo} alt="Logo" width={40} height={40} />

            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-red-700">
                Bangla News 24
              </h4>

              <p className="text-xs text-neutral-500">{date}</p>
            </div>
          </div>
          {/* Auth Links */}
          <div className="md:flex hidden items-center gap-5 justify-end">
            <Link
              href="/login"
              className="rounded-sm hover:text-red-700 text-sm font-semibold"
            >
              সাইন ইন
            </Link>

            <Link
              href="/signup"
              className="bg-red-700 hover:bg-red-800 text-white rounded-sm py-1.5 px-3 text-sm font-semibold"
            >
              সাইন আপ
            </Link>
          </div>
        </div>
        <div className="md:block hidden">
        <Navlinks />
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Navlinks />
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link
                href="/login"
                className="rounded-sm hover:text-red-700 text-sm font-semibold"
              >
                সাইন ইন
              </Link>

              <Link
                href="/signup"
                className="bg-red-700 hover:bg-red-800 text-white rounded-sm py-1.5 px-3 text-sm font-semibold"
              >
                সাইন আপ
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
