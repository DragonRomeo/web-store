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

export const Filters: FC<Props> = () => (
  <div className={styles.container}>
    <Search />
    <Category />
    <Price />
    <Brand />
  </div>
);
