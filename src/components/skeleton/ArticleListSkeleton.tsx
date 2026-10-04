const ArticleListSkeleton = () => {
  return (
    <div className="bg-white h-full rounded-lg overflow-hidden border border-neutral-200 animate-pulse">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="px-5 py-4 border-b border-neutral-200"
        >
          {/* Category */}
          <div className="h-3 w-20 rounded bg-neutral-200 mb-2" />

          {/* Title */}
          <div className="space-y-2">
            <div className="h-5 w-full rounded bg-neutral-200" />
            <div className="h-5 w-3/4 rounded bg-neutral-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleListSkeleton;