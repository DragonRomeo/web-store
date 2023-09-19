import { useContext, useEffect, useState } from 'react';
import type { FC, JSX } from 'react';

import { getCategory } from '~core/api/getCategory.ts';
import type { Product } from '~core/api/getUrl';
import { NavigationButton } from '~core/components/NavigationButton/NavigationButton.tsx';

import { FetchContext } from '../../../../providers/FetchContext';

// import styles from './Brand.module.scss';

interface Props {
  value?: Array<Product>;
  className?: string;
  children?: JSX.Element;
}

export const Brand: FC<Props> = () => {
  const [data, setData] = useState<undefined | Array<string | number | Array<string>>>();
  const context = useContext(FetchContext);

  useEffect(() => {
    const initData = async () => {
      const brands = await getCategory('brand', context);

      setData(brands);
    };

    if (context) initData();
  }, [context]);

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
