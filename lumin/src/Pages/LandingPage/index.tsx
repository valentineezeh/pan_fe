import { useState } from "react";
import { useSelector } from "react-redux";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ProductSegment from "../../components/ProductSegment/ProductSegement";
import { SideBar } from "../../components/SideBar/SideBar";
import { Cart } from "../../components/Cart/Cart";
import { RootState } from "../../store/store";

const LandingPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [searchValue, setSearchValue] = useState("");

  const onShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const { selectedProducts } = useSelector((state: RootState) => ({
    selectedProducts: state.productReducer.selectedProducts ?? [],
  }));

  return (
    <>
      <NavigationBar onShowSideBar={onShowSideBar} />
      <ProductSegment
        showSideBar={showSideBar}
        onShowSideBar={onShowSideBar}
        setCurrency={setCurrency}
        currency={currency}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <SideBar open={showSideBar} close={onShowSideBar}>
        <Cart
          productData={selectedProducts}
          setShowSideBar={setShowSideBar}
          setCurrency={setCurrency}
          currency={currency}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </SideBar>
    </>
  );
};

export default LandingPage;
