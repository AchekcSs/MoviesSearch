import { memo, useMemo } from "react";
import { useContent } from "@/contexts/ContentContext";
import { useSearch } from "@/contexts/SearchContext";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getVisiblePages } from "@/utils/getVisiblePages";

const ContentPagination = () => {
  const { totalPages, applyFilters } = useContent()
  const { searchParams, setSearchParams } = useSearch()

  const currentPage = searchParams.page;
  const visiblePages = useMemo(() => getVisiblePages(currentPage, totalPages), [currentPage, totalPages]);

  return (
    <Pagination>
      <PaginationContent>
        {currentPage !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault();

                const newParams = {
                  ...searchParams,
                  page: Math.max(1, currentPage - 1),
                };

                setSearchParams(newParams);
                applyFilters(newParams);
              }}
            ></PaginationPrevious>
          </PaginationItem>
        )}
        {visiblePages[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                className="min-w-9 w-auto"
                isActive={currentPage === 1}
                onClick={(event) => {
                  event.preventDefault();

                  const newParams = {
                    ...searchParams,
                    page: 1,
                  };

                  setSearchParams(newParams);
                  applyFilters(newParams);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis></PaginationEllipsis>
            </PaginationItem>
          </>
        )}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              className="min-w-9 w-auto px-3"
              isActive={page === currentPage}
              onClick={(e) => {
                e.preventDefault();

                const newParams = {
                  ...searchParams,
                  page,
                };

                setSearchParams(newParams);
                applyFilters(newParams);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {visiblePages.at(-1) < totalPages && (
          <>
            <PaginationItem>
              <PaginationEllipsis></PaginationEllipsis>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="min-w-9 w-auto"
                isActive={currentPage === totalPages}
                onClick={(event) => {
                  event.preventDefault();

                  const newParams = {
                    ...searchParams,
                    page: totalPages,
                  };

                  setSearchParams(newParams);
                  applyFilters(newParams);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {currentPage !== totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault();

                const newParams = {
                  ...searchParams,
                  page: Math.min(totalPages, currentPage + 1),
                };

                setSearchParams(newParams);
                applyFilters(newParams);
              }}
            ></PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default memo(ContentPagination);
