import type { Product } from './getUrl';

export const getCategory = async (key: keyof Product, data: Array<Product>): Promise<Array<string | number| string[]>> => {
  const arr: Array<string | number | string[]> = data.map((obj) => obj[key]);

  const result = Array.from(new Set(arr));

  return result;
};
