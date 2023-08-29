import PropTypes from 'prop-types';

import styles from './Card.module.scss';

export const Card = ({ value }) => (
  <div className={styles.card} key={value.id}>
    <img src={value.images[0]} width="300px" height="300px" alt="img" />
    <div className={styles.info}>
      <p>{value.title}</p>
      <p>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(value.price)}
      </p>
    </div>
  </div>
);

Card.propTypes = {
  value: PropTypes.object,
};
