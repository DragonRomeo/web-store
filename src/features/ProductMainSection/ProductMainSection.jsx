import Filters from "~features/Filters/Filters.jsx";
import ProductsContainer from "./components/ProducatsContainer/ProductsContainer.jsx";
import styles from './ProductMainSection.module.scss';

const ProductMainSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Filters />
        <ProductsContainer />
      </div>
    </section>
  );
};

export default ProductMainSection;
