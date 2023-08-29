import { CountProducts } from './components/CountProducts/CountProducts.tsx';
import { Sort } from './components/Sort/Sort.tsx';
import { View } from './components/View/View.tsx';

import styles from './Options.module.scss';

export const Options = (): JSX.Element => (
  <div className={styles.container}>
    <View />
    <CountProducts />
    <span className={styles.line} />
    <Sort />
  </div>
);

// export default Options;
