import { useEffect, useState } from 'react';
import type { FC, JSX } from 'react';

import { getUrl } from '../../../../core/api/getUrl.ts';
import { Options } from '../../../Options/Options.tsx';

import { CardsContainer } from './components/CardsContainer/CardsContainer.tsx';

import styles from './ProductsContainer.module.scss';

interface Props {
  value?: Array<object>;
  className?: string;
  children?: JSX.Element;
}

export const ProductsContainer: FC<Props> = (): JSX.Element => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const initData = async () => {
      const json = await getUrl();
      setData(json);
      console.log(`data is`);
      console.log(data);
    };

    initData();
  }, []);

  const content =
    data === null ? (
      <>
        <Options />
        <CardsContainer />
      </>
    ) : (
      <>
        <Options />
        <CardsContainer value={data} />
      </>
    );

  return <div className={styles.container}>{content};</div>;
};

// export default ProductsContainer;
