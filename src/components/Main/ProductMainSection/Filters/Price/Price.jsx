import styles from './Price.module.css';

const Price = () => {
  return (
    <div className={styles.container}>
      <h5>price</h5>
      <p>100$</p>
      <input type="range" name="price" min='0' max='100' />
    </div>
  )
}

export default Price