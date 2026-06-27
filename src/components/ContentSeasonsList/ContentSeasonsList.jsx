import TypographyH3 from "@/components/Typography/TypographyH3/TypographyH3";
import { useFavorites } from "@/contexts/FavoritesContext";
import ContentCard from "@/components/ContentCard/ContentCard";

const ContentSeasonsList = ({ seasons = [], contentType, seriesId }) => {
  const { favoritesList, toggleFavorite } = useFavorites();

  if (!seasons || seasons.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-30">
      <TypographyH3 className="mb-6">Seasons:</TypographyH3>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {seasons.map(({ id, name, air_date, poster_path, vote_average, season_number }) => {
          const isFavorite = favoritesList.some(
            (fav) => fav.id === String(seriesId) && fav.seasonNumber === String(season_number)
          );

          return (
            <ContentCard
              key={id}
              id={seriesId}
              title={name}
              releaseDate={air_date}
              posterPath={poster_path}
              voteAverage={vote_average}
              contentType={contentType}
              seasonNumber={season_number}
              isBookmarked={isFavorite}
              onBookmarkToggle={() => {
                toggleFavorite({
                  id: seriesId,
                  title: name,
                  releaseDate: air_date,
                  voteAverage: vote_average,
                  posterPath: poster_path,
                  contentType,
                  seasonNumber: season_number,
                });
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ContentSeasonsList;
