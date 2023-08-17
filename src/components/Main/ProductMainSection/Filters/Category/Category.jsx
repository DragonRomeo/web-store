import styles from './Category.module.css';

const Category = () => {
  return (
    <div className={styles.container }>
      <h5 className={styles.h5}>category</h5>
      <div className={styles.btnWrapper}>
        <button>rpg</button>
        <button>action</button>
        <button>shooter</button>
        <button>simulator</button>
        <button>strategy</button>
      </div>
    </div>
  );
};

export default Category;
