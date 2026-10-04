import NotFound from "@/app/article/[newsid]/not-found";
import { INewsDetailsDataType } from "@/types/type";
import { ExternalLinkIcon } from "@heroui/react";
import { CalendarDays, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

interface NewsDetailsPageProps {
  params: {
    newsid: string;
  };
}

interface ITopics {
  id: string;
  name: string;
}

type Tbody =
    | {
        type: "image";
        url: string;
        width: number;
        height: number;
        caption: string;
        altText: string;
        copyrightHolder: string;
      }
    | {
        type: "text";
        text: string;
      }
    | {
        type: "subheading";
        text: string;
      }

const NewsDetailsPage = async ({ params }: NewsDetailsPageProps) => {
  const { newsid } = await params;
  const getNewsDetailsData = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsid}`,
  );
  const data = await getNewsDetailsData.json();
  const formattedDate = new Date(data.cachedAt).toLocaleDateString("bn-BD", {
    dateStyle: 'full',
  });
  const news: INewsDetailsDataType = data.data;
  const getDescription = () => {
    const blocks = news?.description.blocks.filter(
      (item) => item.type === "text",
    );
    const nBlocks = blocks?.map((item) =>
      item.model.blocks.map((item2) => item2.model.text),
    );
    return nBlocks?.flat();
  };
  if(!data.success){
    return <NotFound />
  }
  
  return (
    <main className="min-h-screen text-zinc-900">
      {/* Article Hero */}
      <section className="bg-white shadow-sm border border-neutral-300 rounded-3xl mt-7 px-4 pb-12 pt-10 sm:px-6 sm:pt-10 lg:px-8 lg:pt-10">
        <div>
          {/* Topics */}
          <div className="mb-6 flex flex-wrap gap-2">
            {news?.topics?.slice(0, 5).map((topic: ITopics) => (
              <span
                key={topic.id}
                className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600"
              >
                {topic.name}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-black leading-[1.2] tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            {news?.title}
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-9 text-zinc-600 sm:text-xl">
            {getDescription()}
          </p>

          {/* Meta */}
          <div className="mt-8 flex flex-col gap-5 border-y border-zinc-200 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-5">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100">
                  <UserRound size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold text-zinc-900">
                    {news?.byline?.[0]?.name}
                  </p>

                  <p className="text-xs text-zinc-500">
                    {news?.byline?.[0]?.role}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <CalendarDays size={17} />
                <span>{formattedDate}</span>
              </div>
            </div>

            <p className="text-sm text-zinc-500">{news?.wordCount} শব্দ</p>
          </div>

          {/* Hero Image */}
          <div className="relative mt-10 overflow-hidden rounded-3xl bg-zinc-100">
            <Image
              src={news?.imageUrl}
              alt={news?.title}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="grid grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,760px)_280px] lg:px-8 lg:py-20">
          {/* Article Body */}
          <article className="min-w-0">
            <div className="rounded-3xl bg-white border border-neutral-300 px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12">
              {news?.body?.map((item: Tbody, index: number) => {
                /* IMAGE */
                if (item.type === "image") {
                  return (
                    <figure key={index} className="my-10">
                      <div className="overflow-hidden rounded-2xl bg-zinc-100">
                        <Image
                          src={item.url}
                          alt={item.altText || item.caption || ""}
                          width={item.width || 1024}
                          height={item.height || 700}
                          className="h-auto w-full object-cover"
                        />
                      </div>

                      {item.caption && (
                        <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
                          {item.caption}
                        </figcaption>
                      )}

                      {item.copyrightHolder && (
                        <p className="mt-1 text-xs text-zinc-400">
                          © {item.copyrightHolder}
                        </p>
                      )}
                    </figure>
                  );
                }

                /* SUBHEADING */
                if (item.type === "subheading") {
                  return (
                    <h2
                      key={index}
                      className="mb-5 mt-12 border-l-4 border-red-600 pl-4 text-2xl font-extrabold leading-tight text-zinc-950 sm:text-3xl"
                    >
                      {item.text}
                    </h2>
                  );
                }

                /* TEXT */
                if (item.type === "text") {
                  return (
                    <p
                      key={index}
                      className="mb-6 whitespace-pre-line text-[17px] leading-loose text-zinc-700 sm:text-[18px]"
                    >
                      {item.text}
                    </p>
                  );
                }

                return null;
              })}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-13 space-y-6">
              {/* Topics */}
              <div className="rounded-2xl border border-neutral-300 shadow-sm bg-white p-5">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-zinc-900">
                  বিষয়
                </h3>

                <div className="flex flex-wrap gap-2">
                  {news?.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-zinc-100 px-3 py-2 text-xs font-medium text-zinc-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Source */}
              <div className="rounded-2xl bg-zinc-950 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Source
                </p>

                <h3 className="mt-2 text-xl font-bold">{news?.source}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  এই প্রতিবেদনটির মূল উৎস থেকে আরও বিস্তারিত তথ্য পড়ুন।
                </p>

                <a
                  href={news?.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-200"
                >
                  মূল প্রতিবেদন
                  <ExternalLinkIcon fontSize={16} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default NewsDetailsPage;
