import { ProductCard } from "../ProductCard";
import type { Product } from "@/types/product";

type ProductCardProps = {
  customClass?: string;
  products?: Product[];
};
export function ProductGrid({ customClass, products }: ProductCardProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl ${
        customClass ?? ""
      }`}
    >
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
