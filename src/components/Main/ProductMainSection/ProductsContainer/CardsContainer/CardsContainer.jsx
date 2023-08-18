import { useState, useEffect } from 'react';
import Card from './Card/Card';
import styles from './CardsContainer.module.css';

const getUrl = async () => {
  const url = 'https://dummyjson.com/products';
  const res = await fetch(url);
  const json = await res.json();
  console.log(json.products);
  return json;
};

const CardsContainer = () => {
  const [data, useData] = useState('');

  useEffect(() => {
    const datesInit = async () => {
      const json = await getUrl();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useData(json.products);
    };

    datesInit();
  }, []);

  let content =
    data === '' ? (
      <p>Data not found</p>
    ) : (
      <div className={styles.container}>
        {data.map((el) => (
          <Card key={el.id} value={el} />
        ))}
      </div>
    );

  return content;
};

export default CardsContainer;
