export const sortContent = (movies, sortBy) => {
  if (!Array.isArray(movies)) return []

  const copy = [...movies];

  switch (sortBy) {
    case "a-z":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "z-a":
      return copy.sort((a, b) => b.title.localeCompare(a.title));
    case "rating-desc":
      return copy.sort((a, b) => b.vote_average - a.vote_average);
    case "rating-asc":
      return copy.sort((a, b) => a.vote_average - b.vote_average);
    default:
      return copy;
  }
};
