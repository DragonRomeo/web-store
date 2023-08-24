import { useState, useEffect } from 'react';
import Card from './Card/Card';
import styles from './CardsContainer.module.css';

//Didn't work with import module 'getUrl' idk why.
const getUrl = async () => {
  const url = 'https://dummyjson.com/products';
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const CardsContainer = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const datesInit = async () => {
      const json = await getUrl();
      setData(json.products);
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
