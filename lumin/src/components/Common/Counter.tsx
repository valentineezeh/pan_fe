import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { CommonStyles } from "./styles";
import {
  incrementProductCount,
  decrementProductCount,
} from "../ProductSegment/ProductSlice";

interface Props {
  productCount?: number;
  productId?: number;
  productPrice?: number;
}

export const Counter = ({ productCount, productId, productPrice }: Props) => {
  const classes = CommonStyles();
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(productCount ?? 0);
  }, [productCount]);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(count + 1);
    dispatch(incrementProductCount(productId ?? 0));
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(count === 0 ? 0 : count - 1);
    dispatch(decrementProductCount(productId ?? 0));
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.counterContainer}
      spacing={2}
    >
      <Grid
        item
        xs={4}
        className={classes.counterAction}
        onClick={handleDecrement}
      >
        -
      </Grid>
      <Grid item xs={4}>
        {count}
      </Grid>
      <Grid
        item
        xs={4}
        className={classes.counterAction}
        onClick={handleIncrement}
      >
        +
      </Grid>
    </Grid>
  );
};
