import TypographyH1 from "@/components/Typography/TypographyH1/TypographyH1";
import TypographyH2 from "@/components/Typography/TypographyH2/TypographyH2";
import TypographyP from "@/components/Typography/TypographyP/TypographyP";
import { TMDB_POSTER_URL } from "@/constants/tmdb";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContentDetailsHero = ({
  id,
  posterPath,
  title = "Unknown title",
  voteAverage = "?",
  releaseDate = "Unknown",
  status = "Unknown",
  runtime,
  genres = [],
  overview = "No description available.",
  episodesCount,
  seasonNumber,
  contentType,
  isBookmarked = false,
  onBookmarkToggle,
}) => {
  const contentInfo = {
    id,
    title,
    contentType,
    releaseDate,
    voteAverage,
    posterPath,
    seasonNumber
  }

  return (
    <section className="w-full lg:h-150 flex flex-col lg:flex-row items-center mb-20 gap-16 justify-center">
      <div className="flex flex-col gap-4">
        <div className="outline min-h-120 h-120 max-h-120 w-80 rounded-md overflow-hidden flex items-center justify-center">
          <img
            src={posterPath ? `${TMDB_POSTER_URL}${posterPath}` : "/src/assets/images/image-not-found.svg"}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <Button onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()

          onBookmarkToggle?.(contentInfo)
        }}>{isBookmarked ? "Remove From Favorites" : "Add To Favorites"}</Button>
      </div>
      <div className="relative w-full lg:max-w-150">
        <div className="flex items-center gap-6 mb-8">
          <TypographyH1 className="text-left">{title}</TypographyH1>
          <div className="flex items-center gap-1.5">
            <StarIcon color="#FFC107" fill="#FFC107" className="w-6 h-6" />
            <TypographyH2 className="border-b-0 pb-0!">{voteAverage}</TypographyH2>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-4">
            <TypographyP className="text-muted-foreground">Release date:</TypographyP>
            <TypographyP className="mt-0!">{releaseDate}</TypographyP>
          </div>
          <div className="flex items-center gap-4">
            <TypographyP className="text-muted-foreground">Status:</TypographyP>
            <TypographyP className="mt-0!">{status}</TypographyP>
          </div>
          {Boolean(runtime) && (
            <div className="flex items-center gap-4">
              <TypographyP className="text-muted-foreground">Runtime:</TypographyP>
              <TypographyP className="mt-0!">{runtime} min</TypographyP>
            </div>
          )}
          {Boolean(episodesCount) > 0 && (
            <div className="flex items-center gap-4">
              <TypographyP className="text-muted-foreground">Episodes:</TypographyP>
              <TypographyP className="mt-0!">{episodesCount}</TypographyP>
            </div>
          )}
        </div>
        {genres.length > 0 && (
          <div className="mb-8">
            <TypographyP className="text-muted-foreground mb-2">Genres:</TypographyP>
            <ul className="flex items-center gap-2 flex-wrap">
              {genres.map(({ id, name }) => (
                <li key={id} className="inline rounded bg-muted px-2 py-1">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <TypographyP>{overview}</TypographyP>
      </div>
    </section>
  );
};

export default ContentDetailsHero;
