import {useEffect, useState} from 'react';
import getCategory from "~core/api/getCategory.js";
import NavigationButton from "~core/components/NavigationButton/NavigationButton.jsx";
import styles from './Brand.module.scss';

const Brand = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const initData = async () => {
      const brands = await getCategory('brand');
      // console.log(brands);

      setData(brands);
    };

    initData();
  }, []);

  let content =
    data === '' ? (
      ''
    ) : (
      <>
        <h5>Brand</h5>
        {data.map((el) => (
          <NavigationButton key={data.indexOf(el)}>
            {el}{' '}
          </NavigationButton>
        ))}
      </>
    );

  return content;
};

export default Brand;
