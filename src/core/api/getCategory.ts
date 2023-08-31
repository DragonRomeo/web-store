// import { getUrl } from './getUrl.ts';

const getUnique = (arr: Array<string>): Array<string> => {
  const result: Array<string> = [];

  for (const str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

export const getCategory = async (key: string, data: any): Promise<string[]> => {
  const products = data;
  // console.log(data);
  console.log('я работаю')
  const arr = products.map((obj: any) => obj[key]);
  const filter = await getUnique(arr);
  return filter;
};
