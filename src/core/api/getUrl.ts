export const getUrl = async ():Promise<Array<object>> => {
  const url = 'https://dummyjson.com/products';
  const res = await fetch(url);
  const json = await res.json();
  // console.log(json.products);
  return json.products;
};
