import styles from './Price.module.css';
import getUrl from '../../jsonModules/getUrl';
import { useState, useEffect } from 'react';

// console.log(await getUrl());

const getData = async () => {
  const json = await getUrl();
  // console.log(json);
  const arr = json.map((el) => el.price);
  // console.log(arr);
  const sort = arr.sort((a, b) => b - a);
  console.log(sort[0]);
  return sort[0];
};

const Price = () => {
  const [data, useData] = useState('');

  useEffect(() => {
    const dateInit = async () => {
      const maxPrice = await getData();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useData(maxPrice);
    };

    dateInit();
  }, []);

  return (
    <div className={styles.container}>
      <h5>price</h5>
      <p>{data} $</p>
      <input
        type='range'
        name='price'
        min='0'
        max={data}
        // value={data}
        step={data / data}
      />
    </div>
  );
};

export default Price;
