import { useState } from 'react';
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
];

const CardsContainer = () => {
  // const json = await getUrl();

  const [state] = useState(arr);
  return (
    <div className={styles.container}>
      {/* {json.products.map((product) => <Card key={product.id} value={product}/>)} */}
      {state.map((el) => (
        <Card key={el.id} value={el} />
      ))}
    </div>
  );
};

export default CardsContainer;
