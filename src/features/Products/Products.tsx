import type { FC, JSX } from 'react';
import { useEffect, useState } from 'react';

import type { Product } from '~core/api/getUrl';
import { getUrl } from '~core/api/getUrl.ts';

import { Filters } from '../Filters/Filters.tsx';

import { ProductsContainer } from './components/ProductsContainer/ProductsContainer.tsx';

import styles from './Products.module.scss';

interface Props {
  className?: string;
  children: JSX.Element;
}

export const Products: FC<Props> = () => {
  const [data, setData] = useState<Array<Product>>();

  /* twice call to server in net-work not a bug.
   This is happens only in dev-mode because of <StrictMode>
   in main component */

  useEffect(() => {
    const initData = async () => {
      const json = await getUrl();
      if (json !== undefined) setData(json);
    };

    initData();
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <Filters value={data} />
          <ProductsContainer value={data} />
        </div>
      </section>
    </>
  );
};
