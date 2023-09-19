import { useEffect, useState } from 'react';
import type { FC } from 'react';

import type { Product } from '~core/api/getUrl';

import { Options } from '../../../Options/Options.tsx';

import { CardsContainer } from './components/CardsContainer/CardsContainer.tsx';

import styles from './ProductsContainer.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: React.ReactNode;
}

export const ProductsContainer: FC<Props> = ({ value, children }) => {
  const [data, setData] = useState<undefined | Array<Product>>();

  useEffect(() => {
    const initData = async () => {
      setData(value);
    };

    initData();
  }, [value]);

  return (
    <div className={styles.container}>
      <Options />
      <CardsContainer value={data} />
      {children}
    </div>
  );
};
