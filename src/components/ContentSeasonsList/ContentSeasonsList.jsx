import TypographyH3 from "@/components/Typography/TypographyH3/TypographyH3"
import ContentSeasonsCard from "../ContentSeasonsCard/ContentSeasonsCard"

const ContentSeasonsList = ({ seasons = [], contentType, seriesId }) => {
  if (!seasons || seasons.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-30">
      <TypographyH3 className="mb-6">Seasons:</TypographyH3>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {seasons.map(({ id, name, air_date, poster_path, vote_average, season_number }) => (
          <ContentSeasonsCard key={id} id={seriesId} name={name} airDate={air_date} posterPath={poster_path} voteAverage={vote_average} contentType={contentType} seasonNumber={season_number} />
        ))}
      </div>
    </section>
  )
}

export default ContentSeasonsList
