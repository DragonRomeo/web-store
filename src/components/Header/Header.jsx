//rfc/rafce - for fast snippet.
//ctrl + alt + Rimport React from 'react'
import styles from './Header.module.css';
// import svg from '../../../public/logo2.png';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
       <h1 className={styles.h1}>online-shop</h1>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
          </ul>
        </nav>
        <div className={styles.user}>
          <div className={styles.card}>
            <p>Cart</p>
            <div>card-image</div>
          </div>
          <div className={styles.card}>
            <p>Login</p>
            <div>login-image</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
