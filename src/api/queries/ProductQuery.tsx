import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance";
import type { Product } from "@/types/product";
import type { PaginationApiResponse } from "@/types/pagination";
import type { AppliedFacetsFromApi, FacetsFromApi } from "@/types/facets";

type ProductMutationPayload = {
  query: "toilets";
  pageNumber: number;
  size: number;
  additionalPages: number;
  sort: string;
  facets: unknown;
};

const defaultPayload = {
  query: "toilets",
  pageNumber: 0,
  size: 10,
  additionalPages: 0,
} as const;

export type PostProductsResponse = {
  appliedFacets?: AppliedFacetsFromApi;
  facets: FacetsFromApi;
  pagination: PaginationApiResponse;
  products: Product[];
};

const postProducts = async (payload: ProductMutationPayload) => {
  const response = await axiosInstance.post<PostProductsResponse>("", payload);
  return response.data;
};

export const useProductMutation = (sortOrder: string, page: number) => {
  const result = useMutation({
    mutationKey: ["product", sortOrder, page],
    mutationFn: async (activeFacets?: unknown) =>
      await postProducts({
        ...defaultPayload,
        facets: activeFacets,
        pageNumber: page,
        sort: sortOrder,
      }),
  });

  return result;
};
