import { getHeadlinesData } from "@/lib/AllFatchData";
import { IHeadlinesDataType } from "@/types/type";
import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
  const headlins: IHeadlinesDataType[] = await getHeadlinesData();
  const inprtentHeadlines = headlins.slice(0, 10);

  return (
    <div className="bg-red-700 h-8 flex items-center sticky z-50 top-0">
      <div className="container mx-auto h-full flex items-center">
        <div className="bg-red-800 h-full px-4 flex items-center justify-center">
          <span className="text-sm text-white font-semibold">সর্বশেষ</span>
        </div>
        <MarqueeText
          className="px-4"
          duration={10}
          direction="right"
        >
          {inprtentHeadlines.map((headline) => (
            <Link href={`/article/${headline.id}`} key={headline.id}>
              <span className="text-sm text-white hover:underline">
                {headline.title}
              </span>
              <span className="mx-4 text-white">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
