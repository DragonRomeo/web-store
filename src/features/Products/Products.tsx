import type { FC, JSX } from 'react';
import { useEffect, useState } from 'react';

import { getUrl } from '~core/api/getUrl.ts';

import { Filters } from '../Filters/Filters.tsx';

import { ProductsContainer } from './components/ProductsContainer/ProductsContainer.tsx';

import styles from './Products.module.scss';

interface Props {
  className?: string;
  children: JSX.Element;
}

export const Products: FC<Props> = (): JSX.Element => {
  const [data, setData] = useState<null | Array<object>>(null);

  useEffect(() => {
    const initData = async () => {
      const json = await getUrl();
      // console.log(json)
      setData(json);
      console.log('initData')
    };

    initData();
  }, []);

  const content =
    data === null ? (
      <>
        <section className={styles.section}>
          <div className={styles.container}>
            <Filters />
            <ProductsContainer />
          </div>
        </section>
      </>
    ) : (
      <>
        <section className={styles.section}>
          <div className={styles.container}>
            <Filters value={data}/>
            <ProductsContainer value={data} />
          </div>
        </section>
      </>
    );

  return content;
};
