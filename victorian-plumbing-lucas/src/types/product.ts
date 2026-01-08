export type Product = {
  id: string;
  sku: string;
  productName: string;
  slug: string;
  averageRating?: number;
  reviewsCount: number;
  image: {
    url: string;
    attributes: {
      imageAltText: string;
    };
  };
  stockStatus: {
    status: string;
    stockLevel?: number;
  };
  price: {
    currencyCode: string;
    wasPriceIncTax?: number;
    priceIncTax: number;
    isOnPromotion: boolean;
    discountPercentage?: number;
  };
  brand: {
    name: string;
  };
};
