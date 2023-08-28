import Path from "~features/Path/Path.jsx";
import ProductMainSection from "~features/ProductMainSection/ProductMainSection.jsx";
import Header from "./components/Header/Header.jsx";

const MainPage = () => {
  return (
    <>
      <Header/>
      <Path />
      <ProductMainSection/>
    </>
  );
}


export default MainPage;