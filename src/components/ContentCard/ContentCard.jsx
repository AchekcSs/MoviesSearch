import { memo } from "react";
import { TMDB_POSTER_URL } from "@/constants/tmdb";
import { Bookmark, BookmarkOff, StarIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const ContentCard = ({
  id,
  contentType,
  title,
  releaseDate,
  voteAverage,
  posterPath,
  isBookmarked = false,
  onBookmarkToggle,
  favoritesPath = false,
  seasonNumber,
}) => {
  const contentInfo = { id, contentType, title, releaseDate, voteAverage, posterPath, seasonNumber };

  let targetPath = `/${contentType}/${id}`;

  if (favoritesPath) {
    targetPath = seasonNumber ? `/favorites/${contentType}/${id}/${seasonNumber}` : `/favorites/${contentType}/${id}`;
  } else {
    if (seasonNumber) {
      targetPath = `/${contentType}/${id}/${seasonNumber}`;
    }
  }

  return (
    <Link to={targetPath}>
      <div className="outline min-h-130 w-full rounded-md overflow-hidden transition-transform duration-300 md:hover:scale-102 relative">
        <div className="h-110 overflow-hidden flex items-center justify-center">
          <img
            src={posterPath ? `${TMDB_POSTER_URL}${posterPath}` : "/src/assets/images/image-not-found.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 py-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-[20px] font-medium max-w-42.5">{title}</h4>
            <div className="flex items-center gap-1.5">
              <StarIcon color="#FFC107" fill="#FFC107" />
              <span className="text-[1.25rem] font-semibold">{voteAverage ? voteAverage.toFixed(1) : "?"}</span>
            </div>
          </div>
          <span className="text-muted-foreground font-semibold">{releaseDate ? releaseDate.slice(0, 4) : "????"}</span>
        </div>
        <Button
          className="py-5.5 absolute top-3 right-3"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            onBookmarkToggle?.(contentInfo);
          }}
        >
          {isBookmarked ? <BookmarkOff className="size-6" /> : <Bookmark className="size-6" />}
        </Button>
      </div>
    </Link>
  );
};

export default memo(ContentCard);
