import { useState, useEffect } from 'react';
import type { FC, JSX } from 'react';

import type { Product } from '~core/api/getUrl';

import { Brand } from './components/Brand/Brand.tsx';
import { Category } from './components/Category/Category.tsx';
import { Price } from './components/Price/Price.tsx';
import { Search } from './components/Search/Search.tsx';

import styles from './Filters.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const Filters: FC<Props> = ({ value }) => {
  const [data, setData] = useState<Array<Product>>();

  useEffect(() => {
    const initData = async () => {
      if (value !== undefined) setData(value);
    };

    initData();
  }, [value]);

  return (
    <div className={styles.container}>
      <Search />
      <Category value={data} />
      <Price transferValue={data} />
      <Brand value={data} />
    </div>
  );
};
