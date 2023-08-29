import { useEffect, useState } from 'react';

import { Card } from './components/Card/Card.tsx';

import styles from './CardsContainer.module.scss';

export const CardsContainer = ({ value }): JSX.Element => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!value) return;
    const datesInit = async () => {
      setData(await value);
    };

    datesInit();
  }, [value]);

  const content =
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

// export default CardsContainer;
