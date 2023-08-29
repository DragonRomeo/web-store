import styles from './Search.module.scss';

export const Search = (): JSX.Element => (
  <div className={styles.inputContainer}>
    <input className={styles.input} type="text" name="text" placeholder="search" />
  </div>
);
