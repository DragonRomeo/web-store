import styles from './Category.module.css';

const getUrl = async () => {
  const url = 'https://dummyjson.com/products';
  const res = await fetch(url);
  const json = await res.json();
  // console.log(json.products);
  return json.products;
};

const getUnique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

const getCategory = async () => {
  const products = await getUrl();
  const arr = products.map((obj) => obj.category);
  // console.log(arr);
  const filter = await getUnique(arr);
  console.log(filter);
  return filter;
};
getCategory();

const Category = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.h5}>category</h5>
      <div className={styles.btnWrapper}>
        <button>rpg</button>
        <button>action</button>
        <button>shooter</button>
        <button>simulator</button>
        <button>strategy</button>
      </div>
    </div>
  );
};

export default Category;
