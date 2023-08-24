import getUrl from './getUrl';

const getUnique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

const getCategory = async (key) => {
  const products = await getUrl();
  const arr = products.map((obj) => obj[key]);
  const filter = await getUnique(arr);
  return filter;
};

export default getCategory;
