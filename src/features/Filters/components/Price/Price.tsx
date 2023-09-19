import { useEffect, useState } from 'react';
import type { FC, JSX } from 'react';

import { getCategory } from '~core/api/getCategory';
import type { Product } from '~core/api/getUrl';

import styles from './Price.module.scss';

interface Props {
  transferValue?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const Price: FC<Props> = ({ transferValue }) => {
  const [value, setValue] = useState(0);

  const [maxPrice, setMaxPrice] = useState<number>();

  // TODO: this should be moved to the topmost layer
  useEffect(() => {
    const dateInit = async () => {
      const newData = await getCategory('price', transferValue);
      const arr: number[] | undefined = newData?.map((item) => +item);
      if (arr) {
        setMaxPrice(Math.max(...arr));
        setValue(Math.max(...arr));
      }
    };

    if (transferValue) dateInit();
  }, [transferValue]);

  return (
    <div className={styles.container}>
      <h5>price</h5>
      <p>{value} $</p>
      {maxPrice ? (
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
