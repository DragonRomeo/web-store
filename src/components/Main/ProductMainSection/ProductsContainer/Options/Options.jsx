import CountProducts from './CountProducts/CountProducts';
import Sort from './Sort/Sort';
import View from './View/View';
import styles from './Options.module.css';

const Options = () => {
  return (
    <div className={styles.container}>
      <CountProducts />
      <Sort />
      <View />
    </div>
  );
};

export default Options;
