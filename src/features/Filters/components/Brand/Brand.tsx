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
  const [data, setData] = useState<undefined | Array<string | number | Array<string>>>();

  useEffect(() => {
    const initData = async () => {
      const brands = await getCategory('brand', value);

      setData(brands);
    };

    if (value) initData();
  }, [value]);

  const content = !data ? (
    ''
  ) : (
    <>
      <h5>Brand</h5>
      {data.map((item) => (
        <NavigationButton key={item}>{item}</NavigationButton>
      ))}
    </>
  );

  return content;
};
