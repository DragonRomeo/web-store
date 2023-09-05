import { useEffect, useState } from 'react';
import type { FC, JSX } from 'react';

import type { Product } from '~core/api/getUrl';

import { Card } from './components/Card/Card.tsx';

import styles from './CardsContainer.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const CardsContainer: FC<Props> = ({ value }): JSX.Element => {
  const [data, setData] = useState<null | undefined | Array<Product>>(null);

  useEffect(() => {
    if (!value) return;
    const datesInit = async () => {
      setData(await value);
    };

    datesInit();
  }, [value]);

  const content =
    data === null || data === undefined ? (
      // TODO: Delete this
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
