import Path from "~features/Path/Path.jsx";
import Products from "~features/Products/Products.jsx";
import Header from "./components/Header/Header.jsx";

const MainPage = () => {
  return (
    <>
      <Header/>
      <Path />
      <Products/>
    </>
  );
}


export default MainPage;