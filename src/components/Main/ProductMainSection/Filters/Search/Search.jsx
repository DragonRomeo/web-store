import styles from './Search.module.css'

const Search = () => {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} type='text' name='text' placeholder='search' />
    </div>
  );
};

export default Search;
