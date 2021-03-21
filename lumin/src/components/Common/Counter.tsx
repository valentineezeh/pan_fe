import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { CommonStyles } from "./styles";

export const Counter = () => {
  const classes = CommonStyles();
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount((prevCount) => (count === 0 ? 0 : prevCount - 1));
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
