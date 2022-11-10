import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { ProductSegmentStyle } from "./ProductSegment.style";
import { ProductData } from "./ProductSlice";
import { addProductToCart } from "../ProductSegment/ProductSlice";
import { currencyList } from "./utils";

interface Props {
  product?: ProductData;
  setCurrency: (value: string) => void;
  currency: string;
  showSideBar: boolean;
  onShowSideBar: () => void;
}

export const ProductCard = ({
  product,
  currency,
  onShowSideBar,
  showSideBar,
}: Props) => {
  const classes = ProductSegmentStyle();
  const dispatch = useDispatch();

  const onAddProdToCart = (prod: ProductData) => {
    dispatch(addProductToCart(prod));
  };

  const functionWrapper = (prod: any) => {
    onShowSideBar();
    if (!showSideBar) {
      onAddProdToCart(prod);
    }
  };

  const currencySymbol =
    currencyList.find((i) => i.currency === currency)?.symbol ?? "";

  return (
    <>
      <Grid
        item
        sm={4}
        xs={6}
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.productContainer}
      >
        <Grid item xs>
          <Button className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src={product?.image_url}
              style={{ height: "100px" }}
            />
          </Button>
        </Grid>
        <Grid item xs>
          <Typography className={classes.titleText}>
            {product?.title}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1">
            From {currencySymbol}
            {product?.price}
          </Typography>
        </Grid>
        <Grid item xs>
          <Button
            className={classes.cartButton}
            onClick={() => functionWrapper(product)}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
