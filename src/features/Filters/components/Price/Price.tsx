import { useEffect, useState, type FC, type JSX } from 'react';

import { getCategory } from '~core/api/getCategory';

import styles from './Price.module.scss';

interface Props {
  value?: Array<object>;
  className?: string;
  children?: JSX.Element | Array<object>;
}

export const Price: FC<Props> = ({ value }): JSX.Element => {
  const [data, setData] = useState<number | Array<object>>(0);

  const [maxPrice, setMaxPrice] = useState<number>();

  // TODO: this should be moved to the topmost layer
  useEffect(() => {
    const dateInit = async () => {
      const jsonData = await value;
      const newData = await getCategory('price', jsonData);
      const arr: number[] = newData.map((el) => +el);
      setMaxPrice(Math.max(...arr));
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
