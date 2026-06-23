import { useState } from "react";
import { useContent } from "@/contexts/ContentContext";
import { useSearch } from "@/contexts/SearchContext";
import { SearchIcon } from "lucide-react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchInput = ({ variant = "header" }) => {
  const { searchParams, setSearchParams, searchInput, setSearchInput } = useSearch();
  const { applyFilters } = useContent();

  const isHeader = variant === "header";

  return (
    <div>
      <form
        className={isHeader ? "items-center gap-3 hidden md:w-80 md:flex lg:w-130" : "flex items-center gap-3 w-full md:w-150"}
        onSubmit={(event) => {
          event.preventDefault();

          const newSearchParams = {
            ...searchParams,
            query: searchInput,
            page: 1,
          };

          setSearchParams(newSearchParams);
          applyFilters(newSearchParams);
        }}
      >
        <Field>
          <Input
            name="input-search-header"
            type="text"
            placeholder="Search for the movie..."
            className={isHeader ? "px-3 py-6 md:text-md" : "px-4 py-7 md:text-lg w-full"}
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          ></Input>
        </Field>
        {isHeader && (
          <Button className={isHeader ? "pl-3 pr-3 h-12.5" : "px-6 h-14.5 text-lg font-semibold"}>
            <SearchIcon className="size-6" />
          </Button>
        )}
        {!isHeader && (
          <Button className="px-6 h-14.5 text-lg font-semibold">Search</Button>
        )}
      </form>
    </div>
  );
};

export default SearchInput;
