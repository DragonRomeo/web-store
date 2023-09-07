import type { Product } from './getUrl';

export const getCategory = async (
  key: keyof Product,
  data: Array<Product> | undefined,
): Promise<Array<string | number | Array<string>> | undefined> => {
  let result;
  if(data !== undefined){
    const arr: Array<string | number | Array<string>> = data.map((obj) => obj[key]);

    result = Array.from(new Set(arr));
  } else {
    result = undefined;
  }
  
  return result;
};
