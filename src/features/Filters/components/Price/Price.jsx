import {useEffect, useState} from 'react';
import getUrl from "~core/api/getUrl.js";
import styles from './Price.module.scss';

const getData = async () => {
  const json = await getUrl();
  const arr = json.map((el) => el.price);
  const sort = arr.sort((a, b) => b - a);
  console.log(sort[0]);
  return sort[0];
};

const Price = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const dateInit = async () => {
      const maxPrice = await getData();
      setData(maxPrice);
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
        step='1'
      />
    </div>
  );
};

export default Price;