const MostReadSkeleton = () => {
  return (
    <div className="col-span-1 bg-white border border-neutral-200 rounded-lg sticky top-13 h-fit sm:h-130 overflow-hidden animate-pulse">
      {/* Heading */}
      <div className="px-5 pt-4">
        <div className="h-5 w-32 rounded bg-neutral-200" />
      </div>

      {/* News items */}
      <div className="mt-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="px-5 py-4 flex gap-2"
          >
            {/* Number */}
            <div className="h-6 w-5 shrink-0 rounded bg-neutral-200" />

            {/* Title */}
            <div className="flex-1 space-y-2">
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-4/5 rounded bg-neutral-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostReadSkeleton;