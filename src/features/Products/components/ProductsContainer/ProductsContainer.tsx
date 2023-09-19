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

export const ProductsContainer: FC<Props> = ({ children }) => (
  <div className={styles.container}>
    <Options />
    <CardsContainer />
    {children}
  </div>
);
