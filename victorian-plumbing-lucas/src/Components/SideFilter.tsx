import type {
  AppliedFacetOptionFromApi,
  AppliedFacetsFromApi,
  FacetOptionFromApi,
  FacetsFromApi,
} from "@/types/facets";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type SideFilterProps = {
  appliedFacets?: AppliedFacetsFromApi;
  facets?: FacetsFromApi;
  activeFacets:
    | Record<string, AppliedFacetOptionFromApi[] | undefined>
    | undefined;
  setActiveFacets: (
    newPayload: Record<string, AppliedFacetOptionFromApi[]> | undefined
  ) => void;
};

const toggleFacetOption = (
  appliedOptions: AppliedFacetOptionFromApi[] | undefined,
  option: FacetOptionFromApi,
  addToPayload: boolean
): AppliedFacetOptionFromApi[] => {
  if (addToPayload) {
    const exists = appliedOptions?.some(
      (applied) => applied.identifier === option.identifier
    );

    if (!exists) {
      return [
        ...(appliedOptions ?? []),
        { identifier: option.identifier, value: option.value },
      ];
    }
    return appliedOptions ?? [];
  }

  return (
    appliedOptions?.filter(
      (applied) => applied.identifier !== option.identifier
    ) ?? []
  );
};

export function SideFilter({
  facets,
  activeFacets,
  setActiveFacets,
}: SideFilterProps) {
  const colourFacet = facets?.find((facet) => facet.identifier === "colour");

  return (
    <div className="p-2 col-span-1 max-h-fit bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200">
      <p className="mb-2">{colourFacet?.displayName}</p>
      <hr className="-mx-2" />
      <div className="mt-2 flex flex-col gap-1">
        {colourFacet?.options.map((option) => (
          <div className="flex items-start gap-3">
            <Checkbox
              defaultChecked={activeFacets?.colour?.some(
                (facet) => facet.identifier === option.identifier
              )}
              onCheckedChange={(addToPayload) => {
                const newPayload = toggleFacetOption(
                  activeFacets?.colour,
                  option,
                  Boolean(addToPayload)
                );

                setActiveFacets(
                  newPayload.length ? { colour: newPayload } : undefined
                );
              }}
              id={option.identifier}
            />
            <Label htmlFor={option.identifier}>
              {option.displayValue} ({option.productCount})
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
