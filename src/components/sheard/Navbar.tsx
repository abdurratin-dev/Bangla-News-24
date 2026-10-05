"use client";
import Image from "next/image";
import Logo from "@/assets/logo(1).png";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="bg-white h-fit">
      <div className="container mx-auto md:mb-5">
        <div className="grid grid-cols-[30%_1fr] md:grid-cols-3 items-center py-4 px-4 sm:px-6 gap-4 md:gap-0">
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
          <Link href="/">
            <div className="flex items-center gap-2 md:justify-center justify-end">
              <Image src={Logo} alt="Logo" width={40} height={40} />

              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-red-700">
                  Bangla News 24
                </h4>

                <p className="text-xs text-neutral-500">{date}</p>
              </div>
            </div>
          </Link>
          {/* Auth Links */}
          <div className="md:flex hidden items-center gap-5 justify-end">
            {user ? (
              <div className="flex items-center justify-end gap-3">
                <div className="flex flex-col items-end">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-neutral-400">{user.email}</p>
                </div>
                <Image
                  src={user?.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
        <div className="md:block hidden">
          <Navlinks menu={isMenuOpen} setMenu={setIsMenuOpen} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Navlinks menu={isMenuOpen} setMenu={setIsMenuOpen} />
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={user?.image}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />

                    <div className="flex flex-col items-start">
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-neutral-400">{user.email}</p>
                    </div>
                  </div>
                  <button className="bg-red-700 hover:bg-red-800 text-white rounded-sm py-1.5 px-3 text-sm font-semibold" onClick={() => authClient.signOut()}>সাইন আউট</button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
