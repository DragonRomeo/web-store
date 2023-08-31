import { useEffect, useState, type FC, type JSX } from 'react';

import { NavigationButton } from '~core/components/NavigationButton/NavigationButton.tsx';

import styles from './Category.module.scss';
import { getCategory } from '~core/api/getCategory';

interface Props {
  value?: Array<object>;
  className?: string;
  children?: JSX.Element;
}

export const Category: FC<Props> = ({value}): JSX.Element => {
  const [items, setItems] = useState<null | undefined | Array<object>>(null);

  useEffect(() => {
    const datesInit = async () => {
      const data = await getCategory('category');

      setItems(data);
    };

    datesInit();
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
