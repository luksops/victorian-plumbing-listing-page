import { SORT_ORDER } from "@/constants/apiConstants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SortSelectProps = {
  onValueChange: (newValue: string) => void;
};

export function SortSelect({ onValueChange }: SortSelectProps) {
  return (
    <div>
      <p>Sort by:</p>
      <Select onValueChange={onValueChange} defaultValue="1">
        <SelectTrigger className="w-45">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={SORT_ORDER.RECOMMENDED}>Recommended</SelectItem>
          <SelectItem value={SORT_ORDER.PRICE_ASC}>
            Price - low to high
          </SelectItem>
          <SelectItem value={SORT_ORDER.PRICE_DESC}>
            Price - high to low
          </SelectItem>
          <SelectItem value={SORT_ORDER.DISCOUNT_DESC}>
            Discount - high to low
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
