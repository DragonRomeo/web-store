import styles from './Sort.module.css'

const Sort = () => {
  return (
    <form className={styles.form}>
      <label className={styles.sort} htmlFor='sort'>sort by</label>
      <select className={styles.select} name='sort' id='sort'>
        <option value='price-lowest'>price (lowest)</option>
        <option value='price-highest'>price (highest)</option>
        <option value='name-a'>name (a - z)</option>
        <option value='name-z'>name (z - a)</option>
      </select>
    </form>
  );
};

export default Sort;
