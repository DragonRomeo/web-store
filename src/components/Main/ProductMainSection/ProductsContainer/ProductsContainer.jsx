import { useState, useEffect } from 'react';
import getUrl from '../jsonModules/getUrl';
import CardsContainer from './CardsContainer/CardsContainer';
import Options from './Options/Options';
import styles from './ProductsContainer.module.css';

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
