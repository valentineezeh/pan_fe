import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";

import { ProductSegmentStyle } from "./ProductSegment.style";
import { ProductData } from "./ProductSlice";
import { SideBar } from "../SideBar/SideBar";
import { Cart } from "../Cart/Cart";

interface Props {
  product?: ProductData;
}

export const ProductCard = ({ product }: Props) => {
  const classes = ProductSegmentStyle();
  const [showSideBar, setShowSideBar] = useState(false);

  const onShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <Grid
        item
        xs={4}
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
              src={product === undefined ? "" : product.image_url}
            />
          </Button>
        </Grid>
        <Grid item xs>
          <Typography className={classes.titleText}>
            {product === undefined ? "" : product.title}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1">
            From ${product === undefined ? "" : product.price}
          </Typography>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            className={classes.cartButton}
            onClick={onShowSideBar}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
      <SideBar open={showSideBar} close={onShowSideBar}>
        <Cart />
      </SideBar>
    </>
  );
};
