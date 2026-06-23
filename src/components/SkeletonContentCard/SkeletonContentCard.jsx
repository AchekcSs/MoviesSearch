import { Skeleton } from "@/components/ui/skeleton";

const SkeletonContentCard = () => {
  return (
    <div className="outline h-134 w-full rounded-md overflow-hidden">
      <Skeleton className="w-full h-110" />
      <div className="px-4 py-4">
        <div className="flex items-start justify-between mb-2">
          <Skeleton className="w-43 h-7.5" />
          <Skeleton className="w-14.5 h-7.5" />
        </div>
        <Skeleton className="w-11 h-5" />
      </div>
    </div>
  );
};

export default SkeletonContentCard;
