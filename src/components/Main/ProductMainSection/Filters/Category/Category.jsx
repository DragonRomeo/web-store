import { useState, useEffect } from 'react';
import styles from './Category.module.css';
import getCategory from '../../jsonModules/getCategory';


const Category = () => {
  const [items, useItems] = useState('');

  useEffect(() => {
    const datesInit = async () => {
      const data = await getCategory('category');

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useItems(data);
    };

    datesInit();
  }, []);


  let content =
    items === '' ? (
      ''
    ) : (
      <div className={styles.container}>
        {items.map((el) => (
          <button className={styles.button} key={items.indexOf(el)}>{el} </button>
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
