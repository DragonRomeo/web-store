import { useEffect, useState } from 'react';

import getUrl from '../../../../core/api/getUrl.js';
import Options from '../../../Options/Options.jsx';

import CardsContainer from './components/CardsContainer/CardsContainer.jsx';

import styles from './ProductsContainer.module.scss';

const ProductsContainer = () => {
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

  let content =
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

export default ProductsContainer;
