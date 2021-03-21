import { Grid, Typography } from "@material-ui/core";
import { ReactComponent as ChevronLeft } from "../../assets/chevron-left.svg";
import { CartStyle } from "./Cart.style";
import { FilterInput } from "../Common/FilterInput";
import { CartProductCard } from "./CartProductCard";

export const Cart = () => {
  const classes = CartStyle();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs container direction="column">
          <ChevronLeft className={classes.icon} />
          <FilterInput className={classes.formControl} filterParams={"USD"} />
        </Grid>
        <Grid item xs>
          <Typography className={classes.cartTitle}>YOUR CART</Typography>
        </Grid>
      </Grid>
      <CartProductCard />
    </div>
  );
};
