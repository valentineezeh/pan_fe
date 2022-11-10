import { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const CheckoutPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const onShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <NavigationBar onShowSideBar={onShowSideBar} />
      <h1>Checkout page</h1>
    </>
  );
};

export default CheckoutPage;
