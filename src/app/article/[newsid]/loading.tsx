const ArticleDetailsSkeleton = () => {
  return (
    <main className="min-h-screen text-zinc-900 animate-pulse">
      {/* ================= Hero ================= */}
      <section className="bg-white shadow-sm border border-neutral-300 rounded-3xl mt-7 px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        {/* Topics */}
        <div className="mb-6 flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-6 w-20 rounded-full bg-zinc-200"
            />
          ))}
        </div>

        {/* Title */}
        <div className="max-w-4xl space-y-3">
          <div className="h-12 w-full rounded-lg bg-zinc-200 sm:h-14" />
          <div className="h-12 w-11/12 rounded-lg bg-zinc-200 sm:h-14" />
          <div className="h-12 w-3/5 rounded-lg bg-zinc-200 sm:h-14" />
        </div>

        {/* Description */}
        <div className="mt-7 max-w-3xl space-y-3">
          <div className="h-5 w-full rounded bg-zinc-200" />
          <div className="h-5 w-full rounded bg-zinc-200" />
          <div className="h-5 w-4/5 rounded bg-zinc-200" />
        </div>

        {/* Meta */}
        <div className="mt-8 flex flex-col gap-5 border-y border-zinc-200 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-200" />

              <div className="space-y-2">
                <div className="h-4 w-28 rounded bg-zinc-200" />
                <div className="h-3 w-20 rounded bg-zinc-200" />
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-zinc-200" />
              <div className="h-4 w-32 rounded bg-zinc-200" />
            </div>
          </div>

          {/* Word count */}
          <div className="h-4 w-20 rounded bg-zinc-200" />
        </div>

        {/* Hero Image */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-zinc-200 aspect-[16/9]" />
      </section>

      {/* ================= Content ================= */}
      <section>
        <div className="grid grid-cols-1 gap-10 py-12 sm:px-6 lg:grid-cols-[minmax(0,760px)_280px] lg:px-8 lg:py-20">
          
          {/* Article Body */}
          <article>
            <div className="rounded-3xl border border-neutral-300 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12">
              
              {/* Heading */}
              <div className="h-7 w-24 border-b-2 border-red-200 mb-8" />

              {/* Paragraph */}
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-11/12 rounded bg-zinc-200" />
                <div className="h-4 w-4/5 rounded bg-zinc-200" />
              </div>

              {/* Subheading */}
              <div className="mt-12 mb-5 flex gap-4">
                <div className="h-9 w-1 rounded bg-red-200" />
                <div className="h-8 w-2/3 rounded bg-zinc-200" />
              </div>

              {/* Paragraph */}
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-10/12 rounded bg-zinc-200" />
              </div>

              {/* Content Image */}
              <div className="my-10">
                <div className="aspect-video w-full rounded-2xl bg-zinc-200" />

                <div className="mt-3 h-4 w-3/4 rounded bg-zinc-200" />
              </div>

              {/* Another Subheading */}
              <div className="mt-12 mb-5 flex gap-4">
                <div className="h-9 w-1 rounded bg-red-200" />
                <div className="h-8 w-1/2 rounded bg-zinc-200" />
              </div>

              {/* Paragraphs */}
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-11/12 rounded bg-zinc-200" />
                <div className="h-4 w-full rounded bg-zinc-200" />
                <div className="h-4 w-3/4 rounded bg-zinc-200" />
              </div>

              {/* Another Image */}
              <div className="my-10">
                <div className="aspect-video w-full rounded-2xl bg-zinc-200" />

                <div className="mt-3 h-4 w-2/3 rounded bg-zinc-200" />
              </div>

            </div>
          </article>

          {/* ================= Sidebar ================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-13 space-y-6">

              {/* Topics */}
              <div className="rounded-2xl border border-neutral-300 bg-white p-5 shadow-sm">
                <div className="mb-4 h-4 w-16 rounded bg-zinc-200" />

                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-8 w-16 rounded-lg bg-zinc-200"
                    />
                  ))}
                </div>
              </div>

              {/* Source */}
              <div className="rounded-2xl bg-zinc-200 p-6">
                <div className="h-3 w-16 rounded bg-zinc-300" />

                <div className="mt-3 h-6 w-32 rounded bg-zinc-300" />

                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full rounded bg-zinc-300" />
                  <div className="h-3 w-11/12 rounded bg-zinc-300" />
                  <div className="h-3 w-3/4 rounded bg-zinc-300" />
                </div>

                <div className="mt-5 h-11 w-full rounded-xl bg-zinc-300" />
              </div>

            </div>
          </aside>

        </div>
      </section>
    </main>
  );
};

export default ArticleDetailsSkeleton;