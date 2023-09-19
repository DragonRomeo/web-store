import { useContext, useEffect, useState } from 'react';
import type { FC, JSX } from 'react';

import type { Product } from '~core/api/getUrl';

import { FetchContext } from '../../../../../../providers/FetchContext.tsx';

import { Card } from './components/Card/Card.tsx';

import styles from './CardsContainer.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const CardsContainer: FC<Props> = () => {
  const [data, setData] = useState<undefined | Array<Product>>();
  const context = useContext(FetchContext);

  useEffect(() => {
    const datesInit = async () => {
       /* I need help here */
      setData(context);
    };

    datesInit();
  }, [context]);

  return (
    data && (
      <div className={styles.container}>
        {data.map((el) => (
          <Card key={el.id} value={el} />
        ))}
      </div>
    )
  );
};
