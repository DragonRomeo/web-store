import { useEffect, useState } from 'react';
import type { FC, JSX } from 'react';

import { getCategory } from '~core/api/getCategory.ts';
import type { Product } from '~core/api/getUrl';
import { NavigationButton } from '~core/components/NavigationButton/NavigationButton.tsx';

// import styles from './Brand.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const Brand: FC<Props> = ({ value }) => {
  const [data, setData] = useState<undefined | Array<Product>>();

  useEffect(() => {
    const initData = async () => {
      const json = await value;
      const brands = await getCategory('brand', json);

      setData(brands);
    };

    if (value !== undefined) initData();
  }, [value]);

  const content =
    data === null || data === undefined ? (
      ''
    ) : (
      <>
        <h5>Brand</h5>
        {data.map((el) => (
          <NavigationButton key={data.indexOf(el)}>{el}</NavigationButton>
        ))}
      </>
    );

  return content;
};
