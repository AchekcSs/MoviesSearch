import { memo } from "react";
import { useContent } from "@/contexts/ContentContext";
import { useSearch } from "@/contexts/SearchContext";
import { Button } from "@/components/ui/button";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FiltersPanel = () => {
  const { genres, isSearched, applyFilters } = useContent();
  const { searchParams, setSearchParams, sortBy, setSortBy } = useSearch();

  const updateSearchParams = (newValues) => {
    setSearchParams((prev) => ({
      ...prev,
      ...newValues,
      page: 1,
    }));
  };

  return (
    <div className="flex items-start justify-between w-full gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        {!isSearched && (
          <>
          <span>Filters:</span>
            <Combobox
              items={genres}
              value={searchParams.genreName}
              onValueChange={(genreName) => {
                const genre = genres.find((g) => g.name === genreName);

                updateSearchParams({
                  genreId: genre.id,
                  genreName: genre.name,
                });
              }}
            >
              <ComboboxInput placeholder="Select a genre"></ComboboxInput>
              <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.id} value={item.name}>
                      {item.name}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <Select
              value={searchParams.contentType}
              onValueChange={(type) => {
                updateSearchParams({
                  contentType: type,
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Content Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="movies">Movies</SelectItem>
                  <SelectItem value="tv-shows">TV Shows</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              value={searchParams.releaseYear}
              onValueChange={(years) => {
                updateSearchParams({
                  releaseYear: years,
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Release Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={null}>All Years</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectItem value="2020-01-01">2020+</SelectItem>
                  <SelectItem value="2010-01-01,2019-12-31">2010-2019</SelectItem>
                  <SelectItem value="2000-01-01,2009-12-31">2000-2009</SelectItem>
                  <SelectItem value="1990-01-01,1999-12-31">1990-1999</SelectItem>
                  <SelectItem value="1990-01-01">Before 1990</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              value={searchParams.minRating}
              onValueChange={(minRating) => {
                updateSearchParams({
                  minRating,
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Minimum Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="any-rating">Any Rating</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectItem value="6">6+</SelectItem>
                  <SelectItem value="7">7+</SelectItem>
                  <SelectItem value="8">8+</SelectItem>
                  <SelectItem value="9">9+</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </>
        )}
        {isSearched && (
          <Select
            value={searchParams.contentType}
            onValueChange={(type) => {
              updateSearchParams({
                contentType: type,
              });
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="movies">Movies</SelectItem>
                <SelectItem value="tv-shows">TV Shows</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
        <Button onClick={() => applyFilters(searchParams)}>Apply filters</Button>
        <Button
          variant="secondary"
          onClick={() => {
            const resettedSearchParams = {
              ...searchParams,
              genreId: "",
              genreName: "",
              contentType: "movies",
              releaseYear: "",
              minRating: "",
              page: 1,
            };

            setSearchParams(resettedSearchParams);
            setSortBy("");

            applyFilters(resettedSearchParams);
          }}
        >
          Reset filters
        </Button>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <span>Sort By:</span>
        <Select
        value={sortBy}
          onValueChange={(sortBy) => {
            setSortBy(sortBy);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Popularity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="popularity-desc">Popularity ↓</SelectItem>
              {/*<SelectItem value="populariry-">Popularity ↑</SelectItem>*/}
            </SelectGroup>
            <SelectGroup>
              <SelectItem value="rating-desc">Rating ↓</SelectItem>
              <SelectItem value="rating-ask">Rating ↑</SelectItem>
            </SelectGroup>
            {/*<SelectGroup>
              <SelectItem value="release-date+">Release Date ↓</SelectItem>
              <SelectItem value="release-date-">Release Date ↑</SelectItem>
            </SelectGroup>*/}
            <SelectGroup>
              <SelectItem value="a-z">Title A-Z</SelectItem>
              <SelectItem value="z-a">Title Z-A</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default memo(FiltersPanel);
