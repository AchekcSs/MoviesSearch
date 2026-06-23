import { createContext, useContext, useState, useCallback } from "react";
import { discoverMovies, discoverShows, getMoviesGenres, getShowsGenres, searchMovies, searchShows } from "@/api/moviesAPI";

const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);

  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isSearched, setIsSearched] = useState(false);

  const applyFilters = useCallback(async (params) => {
    setIsLoading(true);

    try {
      const isMovies = params.contentType === "movies";

      const genresList = isMovies ? await getMoviesGenres() : await getShowsGenres();

      const data = params.query.trim()
        ? isMovies
          ? await searchMovies(params)
          : await searchShows(params)
        : isMovies
          ? await discoverMovies(params)
          : await discoverShows(params);

      setContent(data.results);
      setGenres(genresList);

      setTotalPages(Math.min(data.totalPages, 500));
      setTotalResults(data.totalResults);

      setIsSearched(Boolean(params.query.trim()));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ContentContext.Provider
      value={{
        content,
        genres,
        totalPages,
        totalResults,
        isLoading,
        error,
        isSearched,
        applyFilters,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext)

  if (!context) {
    throw new Error("useContent must be used within ContentProvider")
  }

  return context
}
