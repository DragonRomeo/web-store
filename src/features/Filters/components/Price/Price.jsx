import { useEffect, useState } from 'react';

import getUrl from '~core/api/getUrl.js';

import styles from './Price.module.scss';

// TODO: move to core/api
const getData = async () => {
  const json = await getUrl();
  const arr = json.map((el) => el.price);
  const sort = arr.sort((a, b) => b - a);
  console.log(sort[0]);
  return sort[0];
};

const Price = () => {
  const [data, setData] = useState(0);

  const [maxPrice, setMaxPrice] = useState();

  // TODO: this should be moved to the topmost layer
  useEffect(() => {
    const dateInit = async () => {
      setMaxPrice(await getData());
    };

    dateInit();
  }, []);

  return (
    <div className={styles.container}>
      <h5>price</h5>
      <p>{data} $</p>
      {maxPrice !== undefined ? (
        <input
          type="range"
          name="price"
          min="0"
          max={maxPrice}
          value={data}
          onChange={(e) => setData(parseInt(e.target.value))}
          step="1"
        />
      ) : undefined}
    </div>
  );
};

export default Price;
