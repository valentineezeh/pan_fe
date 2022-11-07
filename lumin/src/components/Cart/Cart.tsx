import { Button, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { ReactComponent as ChevronLeft } from "../../assets/chevron-left.svg";
import { CartStyle } from "./Cart.style";
import { FilterInput } from "../Common/FilterInput";
import { CartProductCard } from "./CartProductCard";
import { ProductData } from "../ProductSegment/ProductSlice";
import { RootState } from "../../store/store";

interface Props {
  productData: Array<ProductData>;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart = ({ productData, setShowSideBar }: Props) => {
  const classes = CartStyle();

  const { totalAmount } = useSelector((state: RootState) => ({
    totalAmount: state.productReducer.totalAmount ?? [],
  }));

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs container direction="column">
          <ChevronLeft
            className={classes.icon}
            onClick={() => setShowSideBar(false)}
          />
          <FilterInput className={classes.formControl} filterParams={"USD"} />
        </Grid>
        <Grid item xs>
          <Typography className={classes.cartTitle}>YOUR CART</Typography>
        </Grid>
      </Grid>
      {productData?.map((prod, index) => (
        <CartProductCard key={index} product={prod} />
      ))}

      <Grid className={classes.cartBottom}>
        <hr />
        <Grid container direction="row">
          <Grid item xs={6}>
            Subtotal
          </Grid>
          <Grid item xs={6} className={classes.totalAmount}>
            {totalAmount}
          </Grid>
        </Grid>
        <Grid item xs container direction="column">
          <Button variant="contained" className={classes.subscriptionButton}>
            Make this a subscription (save 20%)
          </Button>
          <Button variant="contained" className={classes.checkoutButton}>
            proceed to checkout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
