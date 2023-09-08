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
  const [data, setData] = useState<undefined | Array<Product>>();

  useEffect(() => {
    if (!value) return;
    const datesInit = async () => {
      setData(value);
    };

    datesInit();
  }, [value]);

  const content =
    data === undefined ? (
      <></>
    ) : (
      <div className={styles.container}>
        {data.map((el) => (
          <Card key={el.id} value={el} />
        ))}
      </div>
    );

  return content;
};
