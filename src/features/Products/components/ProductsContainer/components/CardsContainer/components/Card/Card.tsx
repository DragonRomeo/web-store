import type { FC, JSX } from 'react';

import type { Product } from '~core/api/getUrl';

import styles from './Card.module.scss';

interface Props {
  value?: Product;
}

export const Card: FC<Props> = ({ value }): JSX.Element => {
  /* this is fix for .format(numb.price). i don't use value cause it can get
  undefined value and .format can work only with int or bigInt */
  const numb = value !== undefined ? value : { price: 0 };

  return typeof value === undefined ? (
    <></>
  ) : (
    <div className={styles.card} key={value?.id}>
      <img className={styles.img} src={value?.thumbnail} width="300px" height="300px" alt="img" />
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
};
