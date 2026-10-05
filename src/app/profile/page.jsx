"use client";
import ProfileHero from "@/components/sheard/ProfileHero";
import ProfileSideBer from "@/components/sheard/ProfileSideBer";
import ArticleCard from "@/components/Cards/ProfileArticaleCard";
import {
  CalendarDays,
  ChevronRight,
  Share2,
} from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "প্রধান খবরের সর্বশেষ আপডেট এক নজরে",
    category: "সর্বশেষ",
    time: "আজ",
    description: "দেশ-বিদেশের গুরুত্বপূর্ণ সংবাদ ও আপডেট দ্রুত দেখে নিন।",
  },
  {
    title: "বাংলাদেশের গুরুত্বপূর্ণ খবরগুলো পড়ুন",
    category: "বাংলাদেশ",
    time: "গতকাল",
    description: "নির্বাচিত খবর, বিশ্লেষণ এবং দিনের আলোচিত বিষয়গুলো এখানে।",
  },
  {
    title: "বিশ্বের আলোচিত সংবাদ ও ঘটনাপ্রবাহ",
    category: "বিশ্ব",
    time: "২ দিন আগে",
    description: "আন্তর্জাতিক অঙ্গনের গুরুত্বপূর্ণ ঘটনাগুলোর সংক্ষিপ্ত আপডেট।",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#111]">
      <ProfileHero />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[230px_1fr] lg:py-10">
        <ProfileSideBer />
        <section>
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-black/10 pb-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d71920]">
                Reading history
              </p>
              <h2 className="mt-1 text-2xl font-black tracking-tight">
                আপনার সাম্প্রতিক সংবাদ
              </h2>
            </div>
            <Link href='/' className="hidden items-center gap-1 text-sm font-bold text-black/50 hover:text-[#d71920] sm:flex">
              সব দেখুন <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#111] p-6 text-white sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[#ff5b60]">
                  <CalendarDays size={18} />
                  <span className="text-xs font-black uppercase tracking-[0.18em]">
                    আজকের তারিখ
                  </span>
                </div>
                <h3 className="text-xl font-extrabold">
                  সোমবার, ৫ অক্টোবর, ২০২৬
                </h3>
                <p className="mt-1 text-sm text-white/55">
                  Bangla News 24-এর সঙ্গে আপডেটেড থাকুন।
                </p>
              </div>
              <button className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#111] hover:bg-[#d71920] hover:text-white">
                <Share2 size={16} />
                শেয়ার প্রোফাইল
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
