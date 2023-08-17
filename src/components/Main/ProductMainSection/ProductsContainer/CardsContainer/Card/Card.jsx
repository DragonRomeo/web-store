import styles from './Card.module.css'
//rafce
const getUrl = async () => {
  const url = 'https://dummyjson.com/products';
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  console.log(json.products);
}

const handleClick = () => {
  console.log('click');
  getUrl();
}

const Card = () => {
  return (
    <div className={styles.card} onClick={handleClick}>
      <img src="https://i.playground.ru/e/zGJdOLw2YeyxUg2offNtjg.jpeg?1200x1200" width="300px" height="300px" alt="img" />
      <div className={styles.info}>
      <p>Game Name</p>
      <p>30.99$</p>
      </div>
      
    </div>

    
  )
}

export default Card