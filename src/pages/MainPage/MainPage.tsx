import { Path } from '~features/Path/Path.tsx';
import { Products } from '~features/Products/Products.tsx';

import { Header } from './components/Header/Header.tsx';

export const MainPage = (): JSX.Element => (
  <>
    <Header />
    <Path />
    <Products />
  </>
);
