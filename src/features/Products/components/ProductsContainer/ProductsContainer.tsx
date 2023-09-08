import { useEffect, useState } from 'react';
import type { FC, JSX } from 'react';

import type { Product } from '~core/api/getUrl';

import { Options } from '../../../Options/Options.tsx';

import { CardsContainer } from './components/CardsContainer/CardsContainer.tsx';

import styles from './ProductsContainer.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const ProductsContainer: FC<Props> = ({ value }): JSX.Element => {
  const [data, setData] = useState<undefined | Array<Product>>();

  useEffect(() => {
    const initData = async () => {
      const transferData = await value;
      setData(transferData);
    };

    initData();
  }, [value]);

  return (
    <div className={styles.container}>
      <Options />
      <CardsContainer value={data} />
    </div>
  );
};
