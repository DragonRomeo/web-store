import Brand from './Brand/Brand';
import Category from './Category/Category';
import Price from './Price/Price';
import Search from './Search/Search';
import styles from './Filters.module.css'

const Filters = () => {
  return (
    <div className={styles.container}>
      <Search />
      <Category />
      <Price />
      <Brand />
    </div>
  );
};

export default Filters;
