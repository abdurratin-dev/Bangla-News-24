import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo(1).png";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-5 py-5 pt-10">
      <div className="w-full max-w-3xl text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8">
            <Image 
            src={Logo}
            alt="logo"
            width={50}
            height={50}
            />
        </div>

        {/* 404 */}
        <h1 className="text-[120px] sm:text-[160px] md:text-[200px] leading-none font-bold text-[#c90000] tracking-tight">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg leading-8 text-gray-500">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
          পরিবর্তন করা হয়েছে অথবা এই ঠিকানায় আর পাওয়া যাচ্ছে না।
        </p>
        {/* Bottom news-style line */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <div className="h-[2px] w-16 bg-[#c90000]" />
          <span className="text-sm font-semibold text-[#c90000]">
            Bangla News 24
          </span>
          <div className="h-[2px] w-16 bg-[#c90000]" />
        </div>
      </div>
    </main>
  );
}