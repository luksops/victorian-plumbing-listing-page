import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { type PaginationApiResponse } from "@/types/pagination";

const getPaginationPages = (
  current: number,
  total: number
): (number | string)[] => {
  const pages: (number | string)[] = [1];

  if (current - 3 > 1) pages.push("...");

  for (
    let i = Math.max(2, current - 2);
    i <= Math.min(total, current + 2);
    i++
  ) {
    pages.push(i);
  }

  if (current + 3 < total) pages.push("...");
  if (current !== total && current + 2 < total) pages.push(total);

  return pages;
};

type PaginationComponentProps = {
  onPageChange: (page: number) => void;
  paginationObject: PaginationApiResponse;
};

export function PaginationComponent({
  paginationObject,
  onPageChange,
}: PaginationComponentProps) {
  const currentPage = Math.ceil(Number(paginationObject.from) / 10) + 1;
  const totalPages = Math.ceil(Number(paginationObject.total) / 10);
  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <Pagination className="justify-end mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className={`cursor-pointer ${
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>

        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className="cursor-pointer"
                onClick={() => {
                  onPageChange(Number(page));
                }}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={`cursor-pointer ${
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
