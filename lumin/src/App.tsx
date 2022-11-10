import { useState } from "react";
import { useSelector } from "react-redux";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import ProductSegment from "./components/ProductSegment/ProductSegement";
import { SideBar } from "./components/SideBar/SideBar";
import { Cart } from "./components/Cart/Cart";
import { RootState } from "./store/store";

function App() {
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
}

export default App;
