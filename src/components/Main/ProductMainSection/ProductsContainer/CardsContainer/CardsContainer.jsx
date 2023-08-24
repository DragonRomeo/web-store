import { useState, useEffect } from 'react';
import Card from './Card/Card';
import styles from './CardsContainer.module.css';
import getUrl from '../../jsonModules/getUrl';

const CardsContainer = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const datesInit = async () => {
      const json = await getUrl();
      setData(json);
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
