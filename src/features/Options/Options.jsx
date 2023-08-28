import CountProducts from './components/CountProducts/CountProducts.jsx';
import Sort from './components/Sort/Sort.jsx';
import View from './components/View/View.jsx';

import styles from './Options.module.scss';

const Options = () => {
  return (
    <div className={styles.container}>
      <View />
      <CountProducts />
      <span className={styles.line} />
      <Sort />
    </div>
  );
};

export default Options;
