import ProductsContainer from './ProductsContainer/ProductsContainer';
import styles from './ProductMainSection.module.css';
import Filters from './Filters/Filters';

const ProductMainSection = () => {
  return (
    <section className={styles.section}>
      <Filters />
      <ProductsContainer />
    </section>
  );
};

export default ProductMainSection;
