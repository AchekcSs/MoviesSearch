import { useMemo } from "react";
import { useSearch } from "@/contexts/SearchContext";
import { useContent } from "@/contexts/ContentContext";
import { sortContent } from "@/utils/sortContent.js";
import FiltersPanel from "@/components/FiltersPanel/FiltersPanel";
import ContentCard from "@/components/ContentCard/ContentCard";
import SkeletonContentCard from "@/components/SkeletonContentCard/SkeletonContentCard";
import ContentPagination from "@/components/ContentPagination/ContentPagination";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/contexts/FavoritesContext";

const ContentList = () => {
  const { content, totalResults, isLoading, applyFilters } = useContent();
  const { sortBy, searchParams, setSearchParams } = useSearch();
  const { favoritesList, toggleFavorite } = useFavorites();

  const sortedMovies = useMemo(() => sortContent(content, sortBy), [content, sortBy]);

  return (
    <section className="flex flex-col items-center gap-12 pt-10 pb-30">
      {searchParams.query !== "" && (
        <h2 className="text-4xl text-center font-medium max-w-xxl">
          <span className="text-muted-foreground font-regular">Shoving </span>
          {totalResults} <span className="text-muted-foreground font-regular">results for </span> "{searchParams.query}"
          {totalResults === 0 && (
            <div className="flex items-center gap-4 mt-4">
              <h2 className="">
                <span className="text-muted-foreground font-regular">Want to see</span>{" "}
                {searchParams.contentType === "movies" ? "shows" : "movies"}{" "}
                <span className="text-muted-foreground font-regular">instead?</span>
              </h2>
              <Button
                onClick={() => {
                  let newContentType;

                  if (searchParams.contentType === "movies") {
                    newContentType = "tv-shows";
                  } else {
                    newContentType = "movies";
                  }

                  setSearchParams((prev) => ({
                    ...prev,
                    contentType: newContentType,
                  }));

                  applyFilters(newContentType);
                }}
              >
                Show {searchParams.contentType === "movies" ? "shows" : "movies"}
              </Button>
            </div>
          )}
        </h2>
      )}
      {totalResults !== 0 && <FiltersPanel />}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <>
            <SkeletonContentCard />
            <SkeletonContentCard />
            <SkeletonContentCard />
            <SkeletonContentCard />
          </>
        ) : (
          <>
            {sortedMovies.map(({ id, original_title, name, release_date, first_air_date, vote_average, poster_path }) => {
              const displayTitle = original_title || name;
              const displayDate = release_date || first_air_date;
              const isFavorite = favoritesList.some((fav) => fav.id === id);

              return (
                <ContentCard
                  key={id}
                  id={id}
                  contentType={original_title ? "movie" : "tv"}
                  title={displayTitle}
                  releaseDate={displayDate}
                  voteAverage={vote_average}
                  posterPath={poster_path}
                  isBookmarked={isFavorite}
                  onBookmarkToggle={() =>
                    toggleFavorite({
                      id,
                      contentType: original_title ? "movie" : "tv",
                      title: displayTitle,
                      releaseDate: displayDate,
                      voteAverage: vote_average,
                      posterPath: poster_path,
                    })
                  }
                />
              );
            })}
          </>
        )}
      </div>
      {totalResults !== 0 && <ContentPagination />}
    </section>
  );
};

export default ContentList;
