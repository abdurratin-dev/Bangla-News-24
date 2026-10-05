'use client'
import { authClient } from "@/lib/auth-client";
import { Home,Mail,Edit3, UserRound,} from "lucide-react";
import profileImg from "@/assets/istockphoto-1316947194-612x612.jpg";
import Image from "next/image";

 
export default function ProfileHero() {
    const { data: session } = authClient.useSession();
      const user = session?.user;
  return (
    <section className="border-b border-black/10 bg-[#f7f7f5]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black/45">
          <Home size={14} />
          <span>/</span>
          <span>প্রোফাইল</span>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <div className="relative mx-auto md:mx-0">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-xl sm:h-36 sm:w-36">
              <Image
                src={user?.image || profileImg}
                alt={user?.name || "User"}
                height={100}
                width={100}
                className="h-full w-full object-cover"
              />
            </div>
            <span
              className="absolute bottom-2 right-2 rounded-full border-4 border-[#f7f7f5] bg-[#d71920] p-1 text-white"
              title={user?.emailVerified ? "Verified" : "Email not verified"}
            >
              <UserRound size={14} />
            </span>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
              <span className="rounded-full bg-black px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                Reader
              </span>
              <span className="text-xs text-black/45">Member profile</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[#111] sm:text-4xl">
              {user?.name}
            </h1>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-black/55 md:justify-start">
              <Mail size={16} />
              {user?.email}
            </p>
            {!user?.emailVerified && (
              <p className="mt-3 text-xs font-semibold text-[#b3261e]">
                আপনার ইমেইল এখনো ভেরিফাই করা হয়নি।
              </p>
            )}
          </div>

          <div className="flex justify-center md:justify-end">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#d71920]">
              <Edit3 size={16} />
              প্রোফাইল এডিট
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}