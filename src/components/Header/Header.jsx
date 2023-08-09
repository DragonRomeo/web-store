import styles from './Header.module.css';

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
            <div className={styles.iconСart}/>
          </div>
          <div className={styles.card}>
            <p>Login</p>
            <div className={styles.iconLogin}/>
          </div>
        </div>
      </header>
    </>
  );
};

//TODO: replace cart & login img on SVG.
export default Header;
