import type { Product } from "@/types/product";
import { StarRating } from "./ui/StarRating";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const {
    price,
    image,
    brand,
    productName,
    stockStatus,
    averageRating,
    reviewsCount,
  } = product;

  const isInStock = stockStatus.stockLevel && stockStatus.stockLevel > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 w-full">
      <div className="relative bg-gray-50 aspect-square flex items-center justify-center">
        {price.isOnPromotion && (
          <div className="absolute top-1 left-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
        <img
          src={image.url}
          alt={image.attributes.imageAltText}
          className="max-w-full max-h-full object-contain rounded-t-lg"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-gray-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <span>{brand.name}</span>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger>
            <h3 className="text-gray-900 text-sm mb-3 line-clamp-2 text-left">
              {productName}
            </h3>
          </TooltipTrigger>
          <TooltipContent>
            <p>{productName}</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-2xl font-bold text-red-500">
            £{price.priceIncTax}
          </span>
          {price.isOnPromotion && (
            <span className="text-sm text-gray-400 line-through">
              Was £{price.wasPriceIncTax}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mb-2">
          <div
            className={`w-1.5 h-1.5 rounded-sm ${
              isInStock ? "bg-teal-600" : "bg-red-600"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              isInStock ? "text-teal-600" : "text-red-600"
            }`}
          >
            {isInStock
              ? `In Stock (${stockStatus.stockLevel} left)`
              : "Out of Stock"}
          </span>
        </div>

        {averageRating && (
          <StarRating rating={averageRating} reviewsCount={reviewsCount} />
        )}
      </div>
    </div>
  );
}
