export type FacetOptionFromApi = {
  identifier: string;
  value: string | boolean | { gte: number; lte?: number };
  displayValue: string;
  productCount: number;
  priority: number;
};

export type FacetFromApi = {
  identifier: string;
  displayName: string;
  priority: number;
  options: FacetOptionFromApi[];
  facetType: 10 | 20 | 40;
};

export type FacetsFromApi = FacetFromApi[];

export type AppliedFacetOptionFromApi = {
  identifier: string;
  value: string | boolean | { gte: number; lte?: number };
};

export type AppliedFacetsFromApi = Record<string, AppliedFacetOptionFromApi[]>;
