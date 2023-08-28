import Brand from "./components/Brand/Brand.jsx";
import Category from "./components/Category/Category.jsx";
import Price from "./components/Price/Price.jsx";
import Search from "./components/Search/Search.jsx";

import styles from "./Filters.module.scss"

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
