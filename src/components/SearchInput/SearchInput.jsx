import { useContent } from "@/contexts/ContentContext";
import { useSearch } from "@/contexts/SearchContext";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchInput = () => {
  const { searchParams, setSearchParams, searchInput, setSearchInput } = useSearch();
  const { applyFilters } = useContent();

  const hasSearched = searchParams.query.trim() !== ""
  const showClearButton = hasSearched && searchParams.query.trim() === searchInput.trim()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (showClearButton) {
      const newSearchParams = {
        ...searchParams,
        query: "",
        page: 1,
      }

      setSearchParams(newSearchParams)
      setSearchInput("")
      applyFilters(newSearchParams)
      return
    }

    const newSearchParams = {
      ...searchParams,
      query: searchInput.trim(),
      page: 1,
    }

    setSearchParams(newSearchParams)
    applyFilters(newSearchParams)
  }

  return (
    <div>
      <form
        className="flex items-center gap-3 w-full md:w-150"
        onSubmit={handleSubmit}
      >
        <Field>
          <Input
            name="input-search-header"
            type="text"
            placeholder="Search for the movie..."
            className="px-4 py-7 md:text-lg w-full"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          ></Input>
        </Field>
        {showClearButton ? (
          <Button className="px-6 h-14.5 text-lg font-semibold bg-red-500 text-white">Clear</Button>
        ) : (
          <Button className="px-6 h-14.5 text-lg font-semibold">Search</Button>
        )}
      </form>
    </div>
  );
};

export default SearchInput;

//1. Update card and list styles (don't forget about other pages).
//2. Change SearchInput.
//3. Don't forger to change skeletons styles.