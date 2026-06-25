import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "favoritesList";
const FavoritesContext = createContext(null);

const normalizeContentInfo = (contentInfo) => {
  if (!contentInfo) return contentInfo;

  const normalized = { ...contentInfo };

  if (normalized.id !== undefined && normalized.id !== null) {
    normalized.id = String(normalized.id);
  }

  if (normalized.seasonNumber !== undefined && normalized.seasonNumber !== null && normalized.seasonNumber !== "") {
    normalized.seasonNumber = String(normalized.seasonNumber);
  } else {
    delete normalized.seasonNumber;
  }

  return normalized;
};

const isSameFavorite = (fav1, fav2) => {
  if (!fav1 || !fav2) return false;

  const a = normalizeContentInfo(fav1);
  const b = normalizeContentInfo(fav2);

  if (a.id !== b.id) return false;

  const aHasSeason = Object.prototype.hasOwnProperty.call(a, "seasonNumber");
  const bHasSeason = Object.prototype.hasOwnProperty.call(b, "seasonNumber");

  if (aHasSeason && bHasSeason) {
    return a.seasonNumber === b.seasonNumber;
  }

  return !aHasSeason && !bHasSeason;
};

const parseLocalStorageFavorites = () => {
  if (typeof window === "undefined") return [];

  try {
    const storedItem = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsed = storedItem ? JSON.parse(storedItem) : [];

    if (!Array.isArray(parsed)) return [];

    return parsed.map((p) => normalizeContentInfo(p));
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
    const normalized = normalizeContentInfo(contentInfo);

    setFavoritesList((previousFavorites) => {
      if (previousFavorites.some((favorite) => isSameFavorite(favorite, normalized))) {
        return previousFavorites;
      }

      return [...previousFavorites, normalized];
    });
  }, []);

  const removeFromFavoritesList = useCallback((contentInfoOrId) => {
    let target;

    if (typeof contentInfoOrId === "string" || typeof contentInfoOrId === "number") {
      target = { id: String(contentInfoOrId) };
    } else {
      target = normalizeContentInfo(contentInfoOrId);
    }

    setFavoritesList((previousFavorites) => previousFavorites.filter((favorite) => !isSameFavorite(favorite, target)));
  }, []);

  const removeAllFavorites = useCallback(() => {
    setFavoritesList([])
  })

  const toggleFavorite = useCallback((contentInfo) => {
    const normalized = normalizeContentInfo(contentInfo);

    setFavoritesList((previousFavorites) => {
      const alreadyFavorite = previousFavorites.some((favorite) => isSameFavorite(favorite, normalized));

      if (alreadyFavorite) {
        return previousFavorites.filter((favorite) => !isSameFavorite(favorite, normalized));
      }

      return [...previousFavorites, normalized];
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
