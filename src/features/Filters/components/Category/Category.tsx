import { useEffect, useState } from 'react';

import {getCategory} from '~core/api/getCategory.js';
import { NavigationButton } from '~core/components/NavigationButton/NavigationButton.tsx';

import styles from './Category.module.scss';

export const Category = (): JSX.Element => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const datesInit = async () => {
      const data = await getCategory('category');

      setItems(data);
    };

    datesInit();
  }, []);

  const content =
    items === null ? (
      ''
    ) : (
      <div className={styles.container}>
        {items.map((el) => (
          <NavigationButton key={items.indexOf(el)} className={styles.button}>
            {el}{' '}
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

