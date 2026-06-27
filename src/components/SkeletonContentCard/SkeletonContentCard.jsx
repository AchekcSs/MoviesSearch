import { Skeleton } from "@/components/ui/skeleton";

const SkeletonContentCard = () => {
  return (
    <div className="outline w-full rounded-md overflow-hidden h-full">
      <Skeleton className="w-200 h-65 md:h-90 lg:h-110" />
      <div className="px-4 py-4">
        <Skeleton className="w-full h-7.5 mb-2" />
        <div className="flex items-start justify-between">
          <Skeleton className="w-14.5 h-7.5" />
          <Skeleton className="w-10 h-6" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonContentCard;
