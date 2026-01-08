import { useProductMutation } from "@/api/queries/ProductQuery";
import { MainPageGrid } from "@/components/layout/MainPageGrid";
import { ProductGrid } from "@/components/layout/ProductGrid";
import { PaginationComponent } from "@/components/ProductPagination";
import { SideFilter } from "@/components/SideFilter";
import { SortSelect } from "@/components/SortSelect";
import type { AppliedFacetOptionFromApi } from "@/types/facets";
import { useEffect, useState } from "react";

export function ProductPage() {
  const [sortOrder, setSortOrder] = useState("1");
  const [page, setPage] = useState(1);
  const { data, mutateAsync } = useProductMutation(sortOrder, page);
  const [activeFacets, setActiveFacets] = useState<
    Record<string, AppliedFacetOptionFromApi[] | undefined> | undefined
  >(data?.appliedFacets ?? {});

  useEffect(() => {
    mutateAsync(activeFacets);
  }, [mutateAsync, sortOrder, page, activeFacets]);

  return (
    <>
      <MainPageGrid customClass="mb-2 items-end">
        <p className="font-bold">Filter by</p>
        <div
          className={`col-span-3 flex justify-between flex-col gap-2 xs:gap-0 xs:items-end xs:flex-row`}
        >
          <SortSelect onValueChange={setSortOrder} />
          <p className="-col-start-1">{data?.pagination.total} results</p>
        </div>
      </MainPageGrid>

      <MainPageGrid>
        <SideFilter
          activeFacets={activeFacets}
          setActiveFacets={setActiveFacets}
          facets={data?.facets}
        />
        <ProductGrid products={data?.products} customClass="col-span-3" />
      </MainPageGrid>

      {data?.pagination && (
        <div>
          <PaginationComponent
            paginationObject={data.pagination}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      )}
    </>
  );
}
