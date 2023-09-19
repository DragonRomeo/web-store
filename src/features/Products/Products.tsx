import axios from 'axios';
import type { AxiosError } from 'axios';
import type { FC, JSX } from 'react';
import { useEffect, useState } from 'react';

import type { Product } from '~core/api/getUrl';

import { FetchContext } from '../../providers/FetchContext.tsx';
import { Filters } from '../Filters/Filters.tsx';

import { ProductsContainer } from './components/ProductsContainer/ProductsContainer.tsx';

import styles from './Products.module.scss';

interface Props {
  className?: string;
  children: JSX.Element;
}
export const Products: FC<Props> = () => {
  const [products, setProducts] = useState<Array<Product>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /* twice call to server in net-work not a bug.
   This is happens only in dev-mode because of <StrictMode>
   in main component */

  useEffect(() => {
    const initProducts = async () => {
      try {
        setError('');
        setLoading(true);
        const url = 'https://dummyjson.com/products';
        const response = await axios.get(url);
        setProducts(response.data.products);
        setLoading(false);
      } catch (e: unknown) {
        const err = e as AxiosError;
        setLoading(false);
        setError(err.message);
      }
    };

    initProducts();
  }, []);

  return (
    <>
      <section className={styles.section}>
        <FetchContext.Provider value={products}>
          <div className={styles.container}>
            <Filters />

            <ProductsContainer>
              {loading && <p className={styles.message}>Loading...</p>}
              {error && <p className={styles.message}>{error}</p>}
            </ProductsContainer>
          </div>
        </FetchContext.Provider>
      </section>
    </>
  );
};
