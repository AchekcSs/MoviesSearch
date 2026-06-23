import { useFavorites } from "@/contexts/FavoritesContext";
import ContentCard from "@/components/ContentCard/ContentCard";
import TypographyP from "@/components/Typography/TypographyP/TypographyP";
import TypographyH1 from "@/components/Typography/TypographyH1/TypographyH1";
import ClearFavoritesButton from "@/components/ClearFavoritesButton/ClearFavoritesButton";

const FavoritesList = () => {
  const { favoritesList, removeFromFavoritesList } = useFavorites();

  if (favoritesList.length === 0) {
    return (
      <section className="mt-[150%]">
        <TypographyP className="text-muted-foreground text-center">You have no favorites yet.</TypographyP>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-start gap-12 pt-10 pb-30">
      <div className="w-full flex items-center justify-between gap-4 flex-wrap">
        <TypographyH1 className="text-left">Your favorites list:</TypographyH1>
        <ClearFavoritesButton />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoritesList.map(({ id, contentType, title, releaseDate, voteAverage, posterPath }) => (
          <ContentCard
            key={id}
            id={id}
            contentType={contentType}
            title={title}
            releaseDate={releaseDate}
            voteAverage={voteAverage}
            posterPath={posterPath}
            isBookmarked={true}
            onBookmarkToggle={() => removeFromFavoritesList(id)}
            favoritesPath={true}
          />
        ))}
      </div>
    </section>
  );
};

export default FavoritesList;
