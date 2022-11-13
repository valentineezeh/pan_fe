import { Grid, Paper, Typography } from "@material-ui/core";
import { ProductCard } from "../../components/CheckoutSegment/Checkout";
import { ReactComponent as PayPalLogo } from "../../assets/paypal-logo-svgrepo-com.svg";
import { ReactComponent as MasterCardLogo } from "../../assets/mastercard-svgrepo-com.svg";
import { ReactComponent as AppleCardLogo } from "../../assets/applepay-svgrepo-com.svg";
import { ReactComponent as GoogleCardLogo } from "../../assets/googlepay-svgrepo-com.svg";
import { ReactComponent as VisaCardLogo } from "../../assets/visa-svgrepo-com.svg";
import { CheckoutStyle } from "../../components/CheckoutSegment/Checkout.style";
import { ProductData } from "../ProductSegment/ProductSlice";
import { currencyList } from "../ProductSegment/utils";

export const CheckoutProduct = ({
  selectedProducts,
  subTotal,
  total,
  currency,
}: {
  selectedProducts: ProductData[];
  subTotal: { sum: number };
  total: number;
  currency: string;
}) => {
  const classes = CheckoutStyle();
  const currencySymbol =
    currencyList.find((i) => i.currency === currency)?.symbol ?? "";

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        {selectedProducts?.map((prod) => (
          <ProductCard
            prod={prod}
            key={prod.id}
            currencySymbol={currencySymbol}
          />
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
                {currencySymbol} {subTotal.sum}
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
              {currencySymbol} {total}
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
  );
};
