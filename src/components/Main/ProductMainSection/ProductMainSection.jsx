import ProductsContainer from './ProductsContainer/ProductsContainer';
import styles from './ProductMainSection.module.css';
import Filters from './Filters/Filters';

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
