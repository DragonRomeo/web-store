import {useEffect, useState} from 'react';
import styles from './CardsContainer.module.scss';
import Card from "./components/Card/Card.jsx";
// import getUrl from '../../jsonModules/getUrl';

const CardsContainer = ({ value }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!value) return;
    const datesInit = async () => {
      setData(await value);
    };

    datesInit();
  }, [value]);

  let content =
    data === null ? (
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
