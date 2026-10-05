"use client";
import { INavLinksDataType } from "@/types/type";
import { usePathname } from 'next/navigation'
import Link from "next/link";

interface NavLinksProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const Navlinks = ({ menu,setMenu }: NavLinksProps) => {
  const navLinks: INavLinksDataType[] = [
    {
      slug: "/bengali",
      title: "মূলপাতা",
      topicId: null,
      url: "https://www.bbc.com/bengali",
      scrapable: false,
    },
    {
      slug: "politics",
      title: "রাজনীতি",
      topicId: "cqywj91rkg6t",
      url: "https://www.bbc.com/bengali/topics/cqywj91rkg6t",
      scrapable: true,
    },
    {
      slug: "world",
      title: "বিশ্ব",
      topicId: "c907347rezkt",
      url: "https://www.bbc.com/bengali/topics/c907347rezkt",
      scrapable: true,
    },
    {
      slug: "economy",
      title: "অর্থনীতি",
      topicId: "cjgn7233zk5t",
      url: "https://www.bbc.com/bengali/topics/cjgn7233zk5t",
      scrapable: true,
    },
    {
      slug: "health",
      title: "স্বাস্থ্য",
      topicId: "cg7265yyxn1t",
      url: "https://www.bbc.com/bengali/topics/cg7265yyxn1t",
      scrapable: true,
    },
    {
      slug: "sports",
      title: "খেলা",
      topicId: "cdr56g57y01t",
      url: "https://www.bbc.com/bengali/topics/cdr56g57y01t",
      scrapable: true,
    },
    {
      slug: "technology",
      title: "প্রযুক্তি",
      topicId: "c8y94k95v52t",
      url: "https://www.bbc.com/bengali/topics/c8y94k95v52t",
      scrapable: true,
    },
    {
      slug: "/bengali/popular/read",
      title: "সর্বাধিক পঠিত",
      topicId: null,
      url: "https://www.bbc.com/bengali/popular/read",
      scrapable: false,
    },
    {
      slug: "video",
      title: "দেখুন",
      topicId: "cxy7jg418e7t",
      url: "https://www.bbc.com/bengali/topics/cxy7jg418e7t",
      scrapable: true,
    },
  ];
  const pathname = usePathname()
  const links = navLinks.filter((item) => item.topicId);
  if (menu === true) {
    return (
      <div className="flex flex-col justify-center items-start w-full gap-5">
        <Link
          href="/"
          className={`hover:text-red-700 text-sm text-neutral-700 font-semibold px-3 ${pathname === '/' && "bg-red-700"}`}
          onClick={() => setMenu(!menu)}
        >
          মূলপাতা
        </Link>
        {links.map((link) => (
          <Link
            key={link.slug}
            href={`/category/${link.slug}`}
            className="hover:text-red-700 text-sm text-neutral-700 font-semibold px-3"
            onClick={() => setMenu(!menu)}
          >
            {link.title}
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center w-full gap-5">
      <Link
        href="/"
        className="hover:text-red-700 text-sm text-neutral-700 font-semibold"
      >
        মূলপাতা
      </Link>
      {links.map((link) => (
        <Link
          key={link.slug}
          href={`/category/${link.slug}`}
          className="hover:text-red-700 text-sm text-neutral-700 font-semibold"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
