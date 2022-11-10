import { Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

import { NavigationStyle } from "./NavigationBar.style";
import { totalProductPrice } from "../ProductSegment/ProductSlice";
import { RootState } from "../../store/store";

const NavigationBar = ({ onShowSideBar }: { onShowSideBar: () => void }) => {
  const classes = NavigationStyle();

  const { selectedProducts } = useSelector((state: RootState) => ({
    selectedProducts: state.productReducer.selectedProducts ?? [],
  }));

  const cartCount = totalProductPrice(selectedProducts).qty;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
              <Button className={classes.mainLogo}>
                <Typography variant="h4" className={classes.logoText}>
                  Maoluxury
                </Typography>
              </Button>
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
    </div>
  );
};

export default NavigationBar;
