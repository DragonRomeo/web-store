import { useEffect, useState, type FC, type JSX } from 'react';

import { getCategory } from '~core/api/getCategory';

import styles from './Price.module.scss';

interface Props {
  value?: Array<object>;
  className?: string;
  children?: JSX.Element;
}

export const Price: FC<Props> = ({ value }): JSX.Element => {
  const [data, setData] = useState<number | undefined | Array<object>>(0);

  const [maxPrice, setMaxPrice] = useState();

  // TODO: this should be moved to the topmost layer
  useEffect(() => {
    const dateInit = async () => {
      const jsonData = await value;
      const newData = await getCategory('price', jsonData);
      console.log(newData);

      setMaxPrice(Math.max(...newData));
    };

    if (value !== undefined) dateInit();
  }, [value]);

  // const content =
  // data === 0 || data === undefined ? ('') : ()

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
          onChange={(e) => setData(+e.target.value)}
          step="1"
        />
      ) : undefined}
    </div>
  );
};
