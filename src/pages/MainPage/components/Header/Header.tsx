import { ReactComponent as CartIcon } from "../../../../assets/icons/icon-cart.svg";
import { ReactComponent as LoginIcon } from "../../../../assets/icons/icon-login.svg";

import styles from './Header.module.scss';

export const Header = (): JSX.Element => (
  <>
    <header className={styles.header}>
      <div className={styles.mainContainer}>
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
            <CartIcon className={styles.iconCart} width="30" height="30" viewBox="0 0 60 60" />
          </div>
          <div className={styles.card}>
            <p>Login</p>
            <LoginIcon className={styles.iconLogin} width="30" height="30" viewBox="0 0 600 600" />
          </div>
        </div>
      </div>
    </header>
  </>
);

// TODO: replace p & SVG into BUTTON
// export default Header;
