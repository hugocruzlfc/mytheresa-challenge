import Movies from "@/components/movies";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<MoviesByGenreCarouselSkeleton />}>
      <Movies />
    </Suspense>
  );
}

function MoviesByGenreCarouselSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="space-y-2">
          <Skeleton className="h-6 w-24 rounded-full" />
          <div className="w-full">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="pl-0.5 md:basis-1/4 lg:basis-1/5">
                  <div className="p-1">
                    <div className="rounded-lg border shadow-sm">
                      <div className="flex flex-col items-center justify-center gap-2 p-2">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-[300px] w-[200px]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
