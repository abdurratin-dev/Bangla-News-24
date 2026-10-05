import { ChevronRight, Clock3 } from "lucide-react";
import Link from "next/link";

export interface ArticleCardProps {
  article: {
    title: string;
    category: string;
    time: string;
    description: string;
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  if (article.category === "বাংলাদেশ") {
    return <Link href="/newsbd">
        <article className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-xs font-black uppercase tracking-wider text-[#d71920]">
          {article.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-black/40">
          <Clock3 size={13} />
          {article.time}
        </span>
      </div>
      <h3 className="text-lg font-extrabold leading-snug text-[#111]">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-black/55">
        {article.description}
      </p>
      <button className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#111] transition group-hover:text-[#d71920]">
        বিস্তারিত <ChevronRight size={16} />
      </button>
    </article>
    </Link>;
  }
  if (article.category === "সর্বশেষ") {
    return <Link href="/">
        <article className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-xs font-black uppercase tracking-wider text-[#d71920]">
          {article.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-black/40">
          <Clock3 size={13} />
          {article.time}
        </span>
      </div>
      <h3 className="text-lg font-extrabold leading-snug text-[#111]">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-black/55">
        {article.description}
      </p>
      <button className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#111] transition group-hover:text-[#d71920]">
        বিস্তারিত <ChevronRight size={16} />
      </button>
    </article>
    </Link>;
  }
  return (
    <Link href='/category/world'>
    <article className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-xs font-black uppercase tracking-wider text-[#d71920]">
          {article.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-black/40">
          <Clock3 size={13} />
          {article.time}
        </span>
      </div>
      <h3 className="text-lg font-extrabold leading-snug text-[#111]">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-black/55">
        {article.description}
      </p>
      <button className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#111] transition group-hover:text-[#d71920]">
        বিস্তারিত <ChevronRight size={16} />
      </button>
    </article>
    </Link>
  );
}
