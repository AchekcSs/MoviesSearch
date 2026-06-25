import { getContentDetails, getSeasonDetails } from "@/api/moviesAPI";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import ContentImagesSection from "@/components/ContentImagesSection/ContentImagesSection";
import ContentDetailsBreadcrumbs from "@/components/ContentDetailsBreadcrumbs/ContentDetailsBreadcrumbs";
import ContentDetailsHero from "@/components/ContentDetailsHero/ContentDetailsHero";
import { Spinner } from "@/components/ui/spinner";
import ContentSeasonsList from "@/components/ContentSeasonsList/ContentSeasonsList";
import ContentDetailsTrailer from "@/components/ContentDetailsTrailer/ContentDetailsTrailer";
import { scrollToTop } from "@/utils/scrollToTop";

const ContentDetailsPage = () => {
  const { id, contentType, seasonNumber } = useParams();
  const location = useLocation();

  const isFavorites = location.pathname.startsWith("/favorites");

  const [content, setContent] = useState(null);
  const [seriesName, setSeriesName] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        if (seasonNumber) {
          const [seasonData, seriesData] = await Promise.all([
            getSeasonDetails(contentType, id, seasonNumber),
            getContentDetails(contentType, id),
          ]);

          setContent(seasonData);
          setSeriesName(seriesData.title || seriesData.name);
          setImages(seasonData?.images?.posters || []);
          setVideos(seasonData?.videos?.results || []);
        } else {
          const data = await getContentDetails(contentType, id);
          setContent(data);
          setSeriesName(data.title || data.name);
          setImages(data?.images?.backdrops || []);
          setVideos(data?.videos?.results || []);
        }
      } catch (error) {
        console.error("Failed to load content:", error);
      }
    };

    loadContent();
  }, [id, contentType, seasonNumber]);

  useEffect(scrollToTop, [id, contentType, seasonNumber]);

  const isTVSeries = contentType === "tv" && seasonNumber === undefined;

  if (!content) {
    return (
      <>
        <Header />
        <Container></Container>
        <div className="w-full h-[80vh] flex items-center justify-center">
          <Spinner className="size-20" />
        </div>
      </>
    );
  }

  const contentVideoTrailer = videos.find((video) => /trailer/i.test(video.name || video.type));

  const getTrailerUrl = (video) => {
    if (!video || !video.key) return null;

    switch (video.site?.toLowerCase()) {
      case "youtube":
        return `https://youtube.com/embed/${video.key}`;
      case "vimeo":
        return `https://vimeo.com${video.key}`;
      default:
        return null;
    }
  };

  const contentVideoTrailerUrl = getTrailerUrl(contentVideoTrailer);
  console.log(images);

  return (
    <>
      <Header />
      <Container>
        <main>
          <ContentDetailsBreadcrumbs
            title={seriesName}
            seasonNumber={seasonNumber}
            id={id}
            contentType={contentType}
            isFavorites={isFavorites}
          />
          <ContentDetailsHero
            posterPath={content.poster_path}
            title={content.title || content.name}
            voteAverage={content.vote_average ? content.vote_average.toFixed(1) : "?"}
            releaseDate={content.release_date || content.first_air_date || content.air_date || "?"}
            status={content.status || "?"}
            runtime={content.runtime}
            genres={content.genres || []}
            overview={content.overview || "No overview available."}
            episodesCount={content?.episodes?.length}
          />
          {contentVideoTrailer && !isTVSeries && <ContentDetailsTrailer trailer={contentVideoTrailerUrl} />}
          {!seasonNumber && images && images.length !== 0 && <ContentImagesSection images={images} />}
          {isTVSeries && !isFavorites && <ContentSeasonsList seasons={content.seasons} contentType={contentType} seriesId={id} />}
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default ContentDetailsPage;
