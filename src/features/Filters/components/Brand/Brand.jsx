import {useEffect, useState} from 'react';
import getCategory from "~core/api/getCategory.js";
import styles from './Brand.module.scss';

const Brand = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const initData = async () => {
      const brands = await getCategory('brand');
      // console.log(brands);

      setData(brands);
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
