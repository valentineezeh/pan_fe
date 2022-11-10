import { useState } from "react";
import { useSelector } from "react-redux";

import NavigationBar from "../NavigationBar/NavigationBar";
import ProductSegment from "../ProductSegment/ProductSegement";
import { SideBar } from "../SideBar/SideBar";
import { Cart } from "../Cart/Cart";
import { RootState } from "../../store/store";

const LandingPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [currency, setCurrency] = useState("USD");

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
      />
      <SideBar open={showSideBar} close={onShowSideBar}>
        <Cart
          productData={selectedProducts}
          setShowSideBar={setShowSideBar}
          setCurrency={setCurrency}
          currency={currency}
        />
      </SideBar>
    </>
  );
};

export default LandingPage;
