import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { CommonStyles } from "./styles";

interface Props {
  productCount?: number;
}

export const Counter = ({ productCount }: Props) => {
  const classes = CommonStyles();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(productCount ?? 0);
  }, [productCount]);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(count + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(count === 0 ? 0 : count - 1);
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
