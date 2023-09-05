import type { FC, JSX } from 'react';

import type { Product } from '~core/api/getUrl';

import styles from './Card.module.scss';

interface Props {
  value?: Product;
}

export const Card: FC<Props> = ({ value }): JSX.Element => {
  /* this is fix for .format(numb.price). i dont use value cause it can get
  undefined value and .format can work only with int or bigInt */
  const numb = value !== undefined ? value : { price: 0 };

  const content =
    typeof value === undefined ? (
      <></>
    ) : (
      <div className={styles.card} key={value?.id}>
        <img src={value?.images[0]} width="300px" height="300px" alt="img" />
        <div className={styles.info}>
          <p>{value?.title}</p>
          <p>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(numb.price)}
          </p>
        </div>
      </div>
    );

  return content;
};
