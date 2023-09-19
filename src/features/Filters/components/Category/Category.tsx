import { useContext, useEffect, useState } from 'react';
import type { FC, JSX } from 'react';

import { getCategory } from '~core/api/getCategory';
import type { Product } from '~core/api/getUrl';
import { NavigationButton } from '~core/components/NavigationButton/NavigationButton.tsx';

import styles from './Category.module.scss';
import { FetchContext } from '../../../../providers/FetchContext';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}


export const Category: FC<Props> = () => {
  const [items, setItems] = useState<undefined | Array<string | number | string[]>>();
  const context = useContext(FetchContext);

  useEffect(() => {
    const datesInit = async () => {
      const newData = await getCategory('category', context);
      setItems(newData);
    };
    if (context !== undefined) datesInit();
  }, [context]);

  const content = !items ? (
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
