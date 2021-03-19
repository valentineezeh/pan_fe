import { Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavigationStyle } from "./NavigationBar.style";

const NavigationBar = () => {
  const classes = NavigationStyle();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
              <Button className={classes.mainLogo}>
                <Typography variant="h4">LUMIN</Typography>
              </Button>
              <Button color="inherit" className={classes.NavLeftItem}>
                Shop
              </Button>
              <Button color="inherit" className={classes.NavLeftItem}>
                Learn
              </Button>
            </Grid>
            <Button color="inherit" className={classes.NavRightItem}>
              Account
            </Button>
            <Button color="inherit" className={classes.NavRightItem}>
              <ShoppingCartIcon />
            </Button>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
