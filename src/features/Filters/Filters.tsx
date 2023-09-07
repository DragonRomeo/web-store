import { useState, type FC, type JSX, useEffect } from 'react';

import { Brand } from './components/Brand/Brand.tsx';
import { Category } from './components/Category/Category.tsx';
import { Price } from './components/Price/Price.tsx';
import { Search } from './components/Search/Search.tsx';
import type { Product } from '~core/api/getUrl';

import styles from './Filters.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const Filters: FC<Props> = ({ value }): JSX.Element => {
  const [data, setData] = useState<null | Array<Product>>(null);

  useEffect(() => {
    const initData = async () => {
      if (value !== undefined) setData(value);
    };

    initData();
  }, [value]);

  const content =
    data === null ? (
      <>
        <Search />
        <Category />
        <Price />
        <Brand />
      </>
    ) : (
      <>
        <Search />
        <Category value={data} />
        <Price value={data} />
        <Brand value={data} />
      </>
    );

  return <div className={styles.container}>{content}</div>;
};
