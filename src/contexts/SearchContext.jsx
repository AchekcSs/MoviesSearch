import { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    query: "",
    genreId: "",
    genreName: "",
    contentType: "movies",
    releaseYear: "",
    minRating: "",
    page: 1,
  });

  const [sortBy, setSortBy] = useState("");
  const [searchInput, setSearchInput] = useState("")

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams,
        sortBy,
        setSortBy,
        searchInput,
        setSearchInput
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error("useSearch must be used within SearchProvider")
  }

  return context
};
