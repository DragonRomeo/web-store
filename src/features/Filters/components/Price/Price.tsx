import { useEffect, useState, type FC, type JSX } from 'react';

import { getCategory } from '~core/api/getCategory';
import type { Product } from '~core/api/getUrl';

import styles from './Price.module.scss';

interface Props {
  transferValue?: Array<Product>;
  className?: string;
  children?: JSX.Element;
  // number: number;
}

export const Price: FC<Props> = ({ transferValue }): JSX.Element => {
  const [value, setValue] = useState<number>(0);

  const [maxPrice, setMaxPrice] = useState<number>();

  // TODO: this should be moved to the topmost layer
  useEffect(() => {
    const dateInit = async () => {
      const newData = await getCategory('price', transferValue);
      const arr: number[] | undefined = newData !== undefined ? newData.map((el) => +el) : undefined;
      if (arr !== undefined) {
        setMaxPrice(Math.max(...arr))
        setValue(Math.max(...arr));
      }
    };

    if (transferValue !== undefined) dateInit();
  }, [transferValue]);

  return (
    <div className={styles.container}>
      <h5>price</h5>
      <p>{value} $</p>
      {maxPrice !== undefined ? (
        <input
          type="range"
          name="price"
          min="0"
          max={maxPrice}
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          step="1"
        />
      ) : undefined}
    </div>
  );
};
