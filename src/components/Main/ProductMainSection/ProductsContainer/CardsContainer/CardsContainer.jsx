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

const arr = [
  {
    id: 0,
    title: 'Geka',
  },
  {
    id: 1,
    title: 'Zheka',
  },
  {
    id: 2,
    title: 'Ruvik',
  },
  {
    id: 3,
    title: 'Jubaka',
  },
];

const CardsContainer = () => {
  const [data, useData] = useState(arr);

  useEffect(() => {
    const datesInit = async () => {
      const json = await getUrl();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useData(json.products);
    };

    datesInit();
  }, []);

  return (
    <div className={styles.container}>
      {data.map((el) => (
        <Card key={el.id} value={el} />
      ))}
    </div>
  );
};

export default CardsContainer;
