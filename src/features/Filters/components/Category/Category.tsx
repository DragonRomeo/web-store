import { useEffect, useState, type FC, type JSX } from 'react';

import { getCategory } from '~core/api/getCategory';
import { NavigationButton } from '~core/components/NavigationButton/NavigationButton.tsx';

import type { Product } from '~core/api/getUrl';

import styles from './Category.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const Category: FC<Props> = ({ value }): JSX.Element => {
  const [items, setItems] = useState<null | undefined | Array<string | number | string[]>>(null);

  useEffect(() => {
    const datesInit = async () => {
      const newData = await getCategory('category', value);
      setItems(newData);
    };
    if (value !== undefined) datesInit();
  }, [value]);

  const content =
    items === null || items === undefined ? (
      ''
    ) : (
      <div className={styles.container}>
        {items.map((el) => (
          <NavigationButton key={items.indexOf(el)} className={styles.button}>
            {el}
          </NavigationButton>
        ))}
      </div>
    );

  return (
    <div className={styles.container}>
      <h5 className={styles.h5}>category</h5>
      <div className={styles.btnWrapper}>{content}</div>
    </div>
  );
};
