import { useEffect, useState, type FC, type JSX } from 'react';

import { getCategory } from '~core/api/getCategory.ts';
import { NavigationButton } from '~core/components/NavigationButton/NavigationButton.tsx';

// import styles from './Brand.module.scss';

interface Props {
  value?: Array<object>;
  className?: string;
  children?: JSX.Element;
}

export const Brand: FC<Props> = ({ value }): JSX.Element => {
  const [data, setData] = useState<null | undefined | Array<object>>(null);

  useEffect(() => {
    const initData = async () => {
      const json = await value;
      const brands = await getCategory('brand', json);
      // console.log(brands);

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
