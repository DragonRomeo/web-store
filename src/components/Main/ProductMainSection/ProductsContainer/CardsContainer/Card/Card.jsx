import styles from './Card.module.css';
import PropTypes from 'prop-types';
//rafce

// const Card = ({ value }) => {
//   return (
//     <div className={styles.card}>
//       {/* <img src={value.thumbnail} width='300px' height='300px' alt='img' /> */}
//       <div className={styles.info}>
//         <p>{value.title}</p>
//         <p> {new Intl.NumberFormat('en-US', {
//             style: 'currency',
//             currency: 'USD',
//           }).format(value.price)}</p>
//       </div>
//     </div>
//   );
// };

const Card = ({ value }) => {
  console.log(value)
  return (
    <div className={styles.card} key={value.id}>
      <img
        src='https://3dnews.ru/assets/external/illustrations/2023/08/11/1091372/1.jpg'
        width='300px'
        height='300px'
        alt='img'
      />
      <p>{value.title}</p>
    </div>
  );
};

Card.propTypes = {
  value: PropTypes.object,
};

export default Card;
