import styles from './Card.module.css';
import PropTypes from 'prop-types';
//rafce

const Card = ({ value }) => {
  return (
    <div className={styles.card} key={value.id}>
      <img src={value.images[0]} width='300px' height='300px' alt='img' />
      <p>{value.title}</p>
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value.price)}
      </p>
    </div>
  );
};

Card.propTypes = {
  value: PropTypes.object,
};

export default Card;
