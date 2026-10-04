import { IHomePageDataType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsCardProps {
  news: IHomePageDataType;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Link href={`/article/${news.id}`}>
    <div className="bg-white rounded-lg overflow-hidden border border-neutral-200">
      <Image
        src={news.imageUrl}
        alt={news.imageAlt}
        width={800}
        height={400}
        className="w-full h-auto"
      />
      <div className="px-5 py-4 grid gap-3">
        <h2 className="text-xs font-bold text-red-700">{news.category}</h2>
        <h1 className="text-lg font-bold leading-6">{news.title}</h1>
        <p className="text-md text-neutral-600 line-clamp-2">{news.description}</p>
        <p className="text-xs text-neutral-500">
          {new Date(news.lastPublished).toLocaleDateString("bn-BD", {
            dateStyle: "full",
          })}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default NewsCard;
