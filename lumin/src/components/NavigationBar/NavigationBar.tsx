import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

import { NavigationStyle } from "./NavigationBar.style";
import { totalProductPrice } from "../ProductSegment/ProductSlice";
import { RootState } from "../../store/store";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavigationBar = ({ onShowSideBar }: { onShowSideBar: () => void }) => {
  const classes = NavigationStyle();

  const { selectedProducts } = useSelector((state: RootState) => ({
    selectedProducts: state.productReducer.selectedProducts ?? [],
  }));

  const cartCount = totalProductPrice(selectedProducts).qty;

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar color="default" className={classes.AppBar}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar>
              <Grid className={classes.grow}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button className={classes.mainLogo}>
                    <Typography variant="h4" className={classes.logoText}>
                      Maoluxury
                    </Typography>
                  </Button>
                </Link>
                <Button color="inherit" className={classes.buttonFontSize}>
                  Shop
                </Button>
                <Button color="inherit" className={classes.buttonFontSize}>
                  Learn
                </Button>
              </Grid>
              <Button color="inherit" className={classes.buttonFontSize}>
                Account
              </Button>
              <Button
                color="inherit"
                className={classes.buttonFontSize}
                onClick={onShowSideBar}
              >
                <span className={classes.cartTotal}>{cartCount}</span>
                <ShoppingCartIcon />
              </Button>
            </Toolbar>
          </Grid>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default NavigationBar;
