import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { CartStyle } from "./Cart.style";
import { Counter } from "../Common/Counter";

export const CartProductCard = () => {
  const classes = CartStyle();
  return (
    <Grid container>
      <Card className={classes.cardContainer}>
        <CardHeader
          title={
            <Typography variant="body2">Shrimp and Chorizo Paella</Typography>
          }
          action={
            <IconButton>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Grid item container xs={12} className={classes.cardContent}>
            <img
              src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
              alt="prodImg"
              className={classes.cardImg}
            />
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container className={classes.cardBottom}>
            <Grid item xs={6}>
              <Counter />
            </Grid>
            <Grid item xs={4}>
              $20.00
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
