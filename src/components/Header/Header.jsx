//rfc/rafce - for fast snippet.
//ctrl + alt + Rimport React from 'react'
import styles from './Header.module.css';


const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>logo</div>
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
