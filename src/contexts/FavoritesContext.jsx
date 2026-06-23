import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "favoritesList";
const FavoritesContext = createContext(null);

const parseLocalStorageFavorites = () => {
  if (typeof window === "undefined") return [];

  try {
    const storedItem = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsed = storedItem ? JSON.parse(storedItem) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to parse favorites from localStorage", error);
    return [];
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favoritesList, setFavoritesList] = useState(parseLocalStorageFavorites);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoritesList));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  }, [favoritesList]);

  const addToFavorites = useCallback((contentInfo) => {
    setFavoritesList((previousFavorites) => {
      if (previousFavorites.some((favorite) => favorite.id === contentInfo.id)) {
        return previousFavorites;
      }

      return [...previousFavorites, contentInfo];
    });
  }, []);

  const removeFromFavoritesList = useCallback((id) => {
    setFavoritesList((previousFavorites) => previousFavorites.filter((favorite) => favorite.id !== id));
  }, []);

  const removeAllFavorites = useCallback(() => {
    setFavoritesList([])
  })

  const toggleFavorite = useCallback((contentInfo) => {
    setFavoritesList((previousFavorites) => {
      const alreadyFavorite = previousFavorites.some((favorite) => favorite.id === contentInfo.id);

      if (alreadyFavorite) {
        return previousFavorites.filter((favorite) => favorite.id !== contentInfo.id);
      }

      return [...previousFavorites, contentInfo];
    });
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favoritesList, addToFavorites, removeFromFavoritesList, toggleFavorite, removeAllFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) throw new Error("useFavorites must be used within FavoritesProvider");

  return context;
};
