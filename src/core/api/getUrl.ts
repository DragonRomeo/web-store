interface Json {
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

export const getUrl = async (): Promise<Array<object>> => {
  const url = 'https://dummyjson.com/products';
  const res = await fetch(url);
  const json: Json = await res.json();
  return json.products;
};
