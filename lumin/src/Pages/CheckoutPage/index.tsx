import { Grid, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { ProductCard } from "../../components/CheckoutSegment/Checkout";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { totalProductPrice } from "../../components/ProductSegment/ProductSlice";
import { ReactComponent as PayPalLogo } from "../../assets/paypal-logo-svgrepo-com.svg";
import { ReactComponent as MasterCardLogo } from "../../assets/mastercard-svgrepo-com.svg";
import { ReactComponent as AppleCardLogo } from "../../assets/applepay-svgrepo-com.svg";
import { ReactComponent as GoogleCardLogo } from "../../assets/googlepay-svgrepo-com.svg";
import { ReactComponent as VisaCardLogo } from "../../assets/visa-svgrepo-com.svg";
import { CheckoutStyle } from "../../components/CheckoutSegment/Checkout.style";

const CheckoutPage = () => {
  const classes = CheckoutStyle();
  const [showSideBar, setShowSideBar] = useState(false);

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
        <Grid container spacing={3} style={{ marginTop: "50px" }}>
          <Grid item xs={6}>
            Left side
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {selectedProducts?.map((prod) => (
                <ProductCard prod={prod} key={prod.id} />
              ))}
              <span className={classes.hr} />
              <Grid item xs container direction="column">
                <Grid item xs container direction="row">
                  <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                      Subtotal
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                      {subTotal.sum}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs container direction="row">
                  <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                      Shipping
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                      Not available at the moment
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs container direction="row">
                  <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                      Tax
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1" gutterBottom>
                      5%
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <span className={classes.hr} />
              <Grid item xs container direction="row">
                <Grid item xs>
                  <Typography variant="subtitle1" gutterBottom>
                    Total
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1" gutterBottom>
                    {total}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <div style={{ marginTop: "30px" }}>
              <Paper className={classes.paymentMethod}>
                <h3>Accepted Payment Methods</h3>
                <Grid container item xs direction="row">
                  <PayPalLogo className={classes.icon} />
                  <MasterCardLogo className={classes.icon} />
                  <AppleCardLogo className={classes.icon} />
                  <GoogleCardLogo className={classes.icon} />
                  <VisaCardLogo className={classes.icon} />
                </Grid>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default CheckoutPage;
