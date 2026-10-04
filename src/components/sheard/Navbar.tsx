import Image from "next/image";
import Logo from "@/assets/logo(1).png";
import Link from "next/link";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="bg-white">
      <div className="container mx-auto mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center py-4 px-4 sm:px-6 gap-4 md:gap-0">
          {/* Empty space - Desktop */}
          <div className="block">
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
    </div>
  );
};

export default Navbar;
