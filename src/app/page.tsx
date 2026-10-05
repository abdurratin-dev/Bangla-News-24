import NewsCard from "@/components/Cards/NewsCard";
import ArticleCardSkeleton from "@/components/skeleton/ArticleCardSkeleton";
import ArticleListSkeleton from "@/components/skeleton/ArticleListSkeleton";
import MostReadSkeleton from "@/components/skeleton/MostReadSkeleton ";
import {
  getHeadlinesData,
  getHomePageData,
  getMostReadNews,
} from "@/lib/AllFatchData";
import {
  IHeadlinesDataType,
  IHomePageSectionDataType,
  IMostReadDataType,
} from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const homePageData: IHomePageSectionDataType[] = await getHomePageData();
  const mainNews: IHeadlinesDataType[] = await getHeadlinesData();
  const mostReadNews: IMostReadDataType[] = await getMostReadNews();
  const filterdData: IHomePageSectionDataType[] = homePageData.filter(
    (item) => item.count !== 1,
  );
  const currentDate = new Date(mainNews[0].lastPublished).toLocaleDateString(
                        "bn-BD",
                        {
                          dateStyle: "full",
                        },
                      )
  const newDate = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7 mt-5">
        <div className="lg:col-span-2">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Main news section*/}
            <Suspense fallback={<ArticleCardSkeleton />}>
              <Link href={`/article/${mainNews[0].id}`}>
                <div className="bg-white rounded-lg overflow-hidden border border-neutral-200">
                  <Image
                    src={mainNews[0].imageUrl}
                    alt={mainNews[0].imageAlt}
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="px-5 py-4 grid gap-3">
                    <h2 className="text-xs font-bold text-red-700">
                      {mainNews[0].category}
                    </h2>
                    <h1 className="text-2xl font-bold">{mainNews[0].title}</h1>
                    <p className="text-neutral-600">
                      {mainNews[0].description}
                    </p>
                    <p className={`text-xs text-neutral-500 ${currentDate !== newDate && "text-red-700 font-bold"}`}>
                      {currentDate === newDate ? currentDate : "Live..."}
                    </p>
                  </div>
                </div>
              </Link>
            </Suspense>
            <div>
              {/*Main news right side section*/}
              <Suspense fallback={<ArticleListSkeleton />}>
                <div className="bg-white h-full rounded-lg overflow-hidden border border-neutral-200">
                  {filterdData[0].articles.slice(1, 5).map((article) => (
                    <Link key={article.id} href={`/article/${article.id}`}>
                      <div className=" px-5 py-4 border-b border-neutral-200">
                        <h2 className="text-xs font-bold text-red-700">
                          {article.category}
                        </h2>
                        <h1 className="text-lg font-bold">{article.title}</h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </Suspense>
            </div>
          </div>
          {/*Others news section*/}
          <div className="mt-5">
            {filterdData.slice(1, 8).map((news, ind) => (
              <div key={ind}>
                <h2 className="text-lg font-semibold py-3 border-b-2 border-red-700">
                  {news.title}
                </h2>
                <div className="grid lg:grid-cols-3 gap-5 py-4">
                  {news.articles.map((newsData) => (
                    <NewsCard key={newsData.id} news={newsData}></NewsCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*Most read section*/}
        <Suspense fallback={<MostReadSkeleton />}>
          <div className="col-span-1 bg-white border border-neutral-200 rounded-lg sticky top-13 h-fit sm:h-130 overflow-y-auto">
            <h2 className="px-5 pt-4 font-bold ">সর্বাধিক পঠিত</h2>
            {mostReadNews.map((news, ind) => (
              <Link key={ind} href={`/article/${news.id}`}>
                <div className="px-5 py-4 flex gap-2">
                  <span className="text-xl text-red-700">{ind + 1}</span>
                  <span>{news.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
