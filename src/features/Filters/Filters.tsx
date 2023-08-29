import { Brand } from './components/Brand/Brand.tsx';
import { Category } from './components/Category/Category.tsx';
import { Price } from './components/Price/Price.tsx';
import { Search } from './components/Search/Search.tsx';

import styles from './Filters.module.scss';

export const Filters = (): JSX.Element => (
  <div className={styles.container}>
    <Search />
    <Category />
    <Price />
    <Brand />
  </div>
);

// export default Filters;
