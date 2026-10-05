import { authClient } from "@/lib/auth-client";
import { Bookmark, FileText, LogOut, Settings, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfileSideBer = () => {
  return (
    <aside className="h-fit rounded-2xl border border-black/10 bg-white p-3 lg:sticky relative lg:top-13">
      <div className="px-3 pb-3 pt-2 text-xs font-black uppercase tracking-[0.18em] text-black/40">
        Account
      </div>
      <button
        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition text-black/60 hover:bg-black/5 hover:text-black`}
      >
        <UserRound size={18} strokeWidth={1.8} />
        প্রোফাইল
      </button>
      <button
        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition text-black/60 hover:bg-black/5 hover:text-black`}
      >
        <Bookmark size={18} strokeWidth={1.8} />
        সেভ করা সংবাদ
      </button>
      <button
        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition text-black/60 hover:bg-black/5 hover:text-black`}
      >
        <FileText size={18} strokeWidth={1.8} />
        আমার পড়া সংবাদ
      </button>
      <button
        className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition text-black/60 hover:bg-black/5 hover:text-black`}
      >
        <Settings size={18} strokeWidth={1.8} />
        সেটিংস
      </button>
      <button
        className="w-full rounded-xl px-3 py-3 font-bold transition text-black/60 hover:bg-black/5 hover:text-black"
        onClick={() => authClient.signOut()}
      >
        <Link href="/" className="flex items-center gap-2 text-sm">
          <LogOut />
          সাইন আউট
        </Link>
      </button>
    </aside>
  );
};

export default ProfileSideBer;
