import { TMDB_POSTER_URL } from "@/constants/tmdb";
import { StarIcon } from "lucide-react";
import { Link } from "react-router";

const ContentSeasonsCard = ({ id, name, airDate, posterPath, voteAverage, contentType, seasonNumber }) => {
  return (
    <Link to={`/${contentType}/${id}/${seasonNumber}`}>
      <div className="outline min-h-130 w-full rounded-md overflow-hidden transition-transform duration-300 md:hover:scale-102">
        <div className="h-110 overflow-hidden flex items-center justify-center">
          <img
            src={posterPath ? `${TMDB_POSTER_URL}${posterPath}` : "/src/assets/images/image-not-found.svg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 py-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-[20px] font-medium max-w-42.5">{name}</h4>
            <div className="flex items-center gap-1.5">
              <StarIcon color="#FFC107" fill="#FFC107" />
              <span className="text-[1.25rem] font-semibold">{voteAverage ? voteAverage.toFixed(1) : "?"}</span>
            </div>
          </div>
          <span className="text-muted-foreground font-semibold">{airDate ? airDate.slice(0, 4) : "????"}</span>
        </div>
      </div>
    </Link>
  );
};

export default ContentSeasonsCard;
