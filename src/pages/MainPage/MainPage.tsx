import Path from '~features/Path/Path.jsx';
import Products from '~features/Products/Products.jsx';

import { Header } from './components/Header/Header.tsx';

export const MainPage = (): JSX.Element => (
  <>
    <Header />
    <Path />
    <Products />
  </>
);

