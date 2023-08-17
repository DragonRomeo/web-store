import Card from './Card/Card';
import styles from './CardsContainer.module.css'

// const url = 'https://raw.githubusercontent.com/DragonRomeo/online-store-server/main/games.data.json';
const getUrl = async () => {
  const url = 'https://dummyjson.com/products';
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
}

const handleClick = () => {
  console.log('click')
}


const CardsContainer = () => {
  return (
    <div className={styles.container}>
      <Card onClick={handleClick} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsContainer;
