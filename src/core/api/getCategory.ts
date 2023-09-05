import type { Product } from './getUrl';

const getUnique = (arr: Array<string | number>): Array<string | number> => {
  const result: Array<string | number> = [];

  for (const key of arr) {
    if (!result.includes(key)) {
      result.push(key);
    }
  }

  return result;
};

export const getCategory = async (key: keyof Product, data: Array<Product>): Promise<Array<string | number>> => {
  const arr: Array<string | number> = data.map((obj) => obj[key]);

  const result = await getUnique(arr);

  return result;
};
