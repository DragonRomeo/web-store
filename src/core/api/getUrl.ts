interface ProductsResponse {
  products: Array<Product>;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export const getUrl = async (): Promise<Array<Product>> => {
  const url = 'https://dummyjson.com/products';
  const response = await fetch(url);
  const data: ProductsResponse = await response.json();
  return data.products;
};
