import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { ProductSegmentStyle } from "./ProductSegment.style";
import { ProductData } from "./ProductSlice";
import { SideBar } from "../SideBar/SideBar";
import { Cart } from "../Cart/Cart";
import { addProductToCart } from "../ProductSegment/ProductSlice";
import { RootState } from "../../store/store";

interface Props {
  product?: ProductData;
}

export const ProductCard = ({ product }: Props) => {
  const classes = ProductSegmentStyle();
  const [showSideBar, setShowSideBar] = useState(false);
  const dispatch = useDispatch();

  const onShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const functionWrapper = (prod: any) => {
    onShowSideBar();
    if (!showSideBar) return onAddProdToCart(prod);
  };

  const onAddProdToCart = (prod: ProductData) => {
    dispatch(addProductToCart(prod));
  };

  const { selectedProducts } = useSelector((state: RootState) => ({
    selectedProducts: state.productReducer.selectedProducts ?? [],
  }));

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
            />
          </Button>
        </Grid>
        <Grid item xs>
          <Typography className={classes.titleText}>
            {product?.title}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1">From ${product?.price}</Typography>
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
      <SideBar open={showSideBar} close={onShowSideBar}>
        <Cart productData={selectedProducts} />
      </SideBar>
    </>
  );
};
