import {useEffect, useState} from 'react';
import getCategory from "~core/api/getCategory.js";
import styles from './Category.module.scss';

const Category = () => {
  const [items, setItems] = useState('');

  useEffect(() => {
    const datesInit = async () => {
      const data = await getCategory('category');

      setItems(data);
    };

    datesInit();
  }, []);

  let content =
    items === '' ? (
      ''
    ) : (
      <div className={styles.container}>
        {items.map((el) => (
          <button className={styles.button} key={items.indexOf(el)}>
            {el}{' '}
          </button>
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