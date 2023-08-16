import CardsContainer from './CardsContainer/CardsContainer';
import Options from './Options/Options';
import styles from './ProductsContainer.module.css'

const ProductsContainer = () => {
  return (
    <div className={styles.container}>
      <Options />
      <CardsContainer />
    </div>
  );
};

export default ProductsContainer;
