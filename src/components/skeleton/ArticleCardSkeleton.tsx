const ArticleCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-neutral-200 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full aspect-[2/1] bg-neutral-200" />

      {/* Content */}
      <div className="px-5 py-4 grid gap-3">
        {/* Category */}
        <div className="h-3 w-20 rounded bg-neutral-200" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-full rounded bg-neutral-200" />
          <div className="h-5 w-4/5 rounded bg-neutral-200" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-neutral-200" />
          <div className="h-4 w-11/12 rounded bg-neutral-200" />
        </div>

        {/* Date */}
        <div className="h-3 w-36 rounded bg-neutral-200" />
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;