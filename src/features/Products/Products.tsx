import { Filters } from '~features/Filters/Filters.tsx';

import { ProductsContainer } from './components/ProductsContainer/ProductsContainer.tsx';

import styles from './Products.module.scss';

export const Products = (): JSX.Element => (
  <section className={styles.section}>
    <div className={styles.container}>
      <Filters />
      <ProductsContainer />
    </div>
  </section>
);

// export default Products;
