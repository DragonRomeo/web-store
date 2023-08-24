import { useState, useEffect } from 'react';
import getCategory from '../../jsonModules/getCategory';
import styles from './Brand.module.css';

const Brand = () => {
  const [data, useData] = useState('');

  useEffect(() => {
    const initData = async () => {
      const brands = await getCategory('brand');
      console.log(brands);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      useData(brands);
    };

    initData();
  }, []);

  let content =
    data === '' ? (
      ''
    ) : (
      <>
        <h5>Brand</h5>
        {data.map((el) => (
          <button className={styles.button} key={data.indexOf(el)}>
            {el}{' '}
          </button>
        ))}
      </>
    );

  return content;
};

export default Brand;
