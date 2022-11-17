import { Grid, Paper, Typography } from "@material-ui/core";
import { ProductCard } from "../../components/CheckoutSegment/Checkout";
import { CheckoutStyle } from "../../components/CheckoutSegment/Checkout.style";
import { ProductData } from "../ProductSegment/ProductSlice";
import { currencyList } from "../ProductSegment/utils";

export const CheckoutProduct = ({
  selectedProducts,
  subTotal,
  total,
  selectedCurrency,
}: {
  selectedProducts: ProductData[];
  subTotal: { sum: number };
  total: number;
  selectedCurrency: string;
}) => {
  const classes = CheckoutStyle();
  const currencySymbol =
    currencyList.find((i) => i.currency === selectedCurrency)?.symbol ?? "";

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
    </Grid>
  );
};
