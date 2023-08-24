import { useState, useEffect } from 'react';
import styles from './Category.module.css';
import getUrl from '../../jsonModules/getUrl';

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
  const filter = await getUnique(arr);
  return filter;
};
getCategory();

const Category = () => {
  const [items, useItems] = useState('');

  useEffect(() => {
    const datesInit = async () => {
      const data = await getCategory();

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useItems(data);
    };

    datesInit();
  }, []);

  console.log(items[1]);

  let content =
    items === '' ? (
      ''
    ) : (
      <div className={styles.container}>
        {items.map((el) => (
          <button key={items.indexOf(el)}>{el} </button>
        ))}
      </div>
    );

  return (
    <div className={styles.container}>
      <h5 className={styles.h5}>category</h5>
      <div className={styles.btnWrapper}>{content}</div>
    </div>
  );
};

export default Category;
