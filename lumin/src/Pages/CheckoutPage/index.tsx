import { Grid } from "@material-ui/core";
import { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { totalProductPrice } from "../../components/ProductSegment/ProductSlice";
import { CheckoutStyle } from "../../components/CheckoutSegment/Checkout.style";
import { CheckoutProduct } from "../../components/CheckoutSegment/Product";
import { SideBar } from "../../components/SideBar/SideBar";
import { Cart } from "../../components/Cart/Cart";

const CheckoutPage = () => {
  const classes = CheckoutStyle();
  const [showSideBar, setShowSideBar] = useState(false);
  const [currency, setCurrency] = useState("USD");

  const onShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const { selectedProducts } = useSelector((state: RootState) => ({
    selectedProducts: state.productReducer.selectedProducts ?? [],
  }));

  const subTotal = totalProductPrice(selectedProducts);
  const tax = (subTotal.sum * 5) / 100;
  const total = subTotal.sum - tax;

  return (
    <>
      <NavigationBar onShowSideBar={onShowSideBar} />
      <div className={classes.root}>
        <Grid container spacing={8} style={{ marginTop: "50px" }}>
          <Grid item xs={6}>
            Left side
          </Grid>
          <CheckoutProduct
            selectedProducts={selectedProducts}
            subTotal={subTotal}
            total={total}
            currency={currency}
          />
        </Grid>
        <SideBar open={showSideBar} close={onShowSideBar}>
          <Cart
            productData={selectedProducts}
            setShowSideBar={setShowSideBar}
            setCurrency={setCurrency}
            currency={currency}
          />
        </SideBar>
      </div>
    </>
  );
};

export default CheckoutPage;
