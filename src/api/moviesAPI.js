const API_URL = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const getMoviesGenres = async () => {
  try {
    const response = await fetch(`${API_URL}genre/movie/list?language=en`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    
    return data.genres;
  } catch (error) {
    console.error(error);
  }
};

export const getShowsGenres = async () => {
  try {
    const response = await fetch(`${API_URL}genre/tv/list?language=en`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return data.genres;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async (searchParams) => {
  const { query, page } = searchParams;

  const url = new URL(`${API_URL}search/movie`);

  url.searchParams.append("query", query);

  url.searchParams.append("include_adult", "false");

  url.searchParams.append("language", "en-US");

  url.searchParams.append("page", page);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return {
      results: data.results,
      totalPages: data.total_pages,
      currentPage: data.page,
      totalResults: data.total_results,
    };
  } catch (error) {
    console.error(error);
  }
};

export const searchShows = async (searchParams) => {
  const { query, page } = searchParams;

  const url = new URL(`${API_URL}search/tv`);

  url.searchParams.append("query", query);

  url.searchParams.append("include_adult", "false");

  url.searchParams.append("language", "en-US");

  url.searchParams.append("page", page);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return {
      results: data.results,
      totalPages: data.total_pages,
      currentPage: data.page,
      totalResults: data.total_results,
    };
  } catch (error) {
    console.error(error);
  }
};

export const discoverMovies = async (searchParams) => {
  const { genreId, releaseYear, minRating, page = 1 } = searchParams;

  const url = new URL(`${API_URL}discover/movie`);

  if (genreId) {
    url.searchParams.append("with_genres", genreId);
  }

  if (releaseYear) {
    const firstPart = releaseYear?.split(",")[0];
    const secondPart = releaseYear?.split(",")[1];

    if (firstPart && secondPart) {
      url.searchParams.append("primary_release_date.gte", firstPart);
      url.searchParams.append("primary_release_date.lte", secondPart);
    } else if (firstPart === "2020-01-01") {
      url.searchParams.append("primary_release_date.gte", firstPart);
    } else if (firstPart === "1990-01-01") {
      url.searchParams.append("primary_release_date.lte", firstPart);
    }
  }

  if (minRating) {
    url.searchParams.append("vote_average.gte", minRating);
  }

  url.searchParams.append("include_adult", "false");

  url.searchParams.append("language", "en-US");

  url.searchParams.append("page", page || 1);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return {
      results: data.results,
      totalPages: data.total_pages,
      currentPage: data.page,
      totalResults: data.total_results,
    };
  } catch (error) {
    console.error(error);
  }
};

export const discoverShows = async (searchParams) => {
  const { genreId, releaseYear, minRating, page = 1 } = searchParams;

  const url = new URL(`${API_URL}discover/tv`);

  if (genreId) {
    url.searchParams.append("with_genres", genreId);
  }

  if (releaseYear) {
    const firstPart = releaseYear?.split(",")[0];
    const secondPart = releaseYear?.split(",")[1];

    if (firstPart && secondPart) {
      url.searchParams.append("first_air_date.gte", firstPart);
      url.searchParams.append("first_air_date.lte", secondPart);
    } else if (firstPart === "2020-01-01") {
      url.searchParams.append("first_air_date.gte", firstPart);
    } else if (firstPart === "1990-01-01") {
      url.searchParams.append("first_air_date.lte", firstPart);
    }
  }

  if (minRating) {
    url.searchParams.append("vote_average.gte", minRating);
  }

  url.searchParams.append("include_adult", "false");

  url.searchParams.append("language", "en-US");

  url.searchParams.append("page", page || 1);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return {
      results: data.results,
      totalPages: data.total_pages,
      currentPage: data.page,
      totalResults: data.total_results,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getContentDetails = async (contentType, id) => {
  try {
    const response = await fetch(`${API_URL}${contentType}/${id}?language=en-US&append_to_response=images,videos`, options)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getSeasonDetails = async (contentType, id, seasonNumber) => {
  try {
    const response = await fetch(`${API_URL}${contentType}/${id}/season/${seasonNumber}?language=en-US&append_to_response=images,videos`, options)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

//export const getContentImages = async (contentType, id) => {
//  try {
//    const response = await fetch(`${API_URL}${contentType}/${id}/images`, options)

//    if (!response.ok) {
//      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`)
//    }

//    return response.json()

//  } catch (error) {
//    console.error(error)
//  }
//}