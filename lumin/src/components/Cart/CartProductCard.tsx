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
import { ProductData } from "../ProductSegment/ProductSlice";

interface Props {
  product?: ProductData;
}

export const CartProductCard = ({ product }: Props) => {
  const classes = CartStyle();
  console.log("product :>> ", product);
  return (
    <Grid container>
      <Card className={classes.cardContainer}>
        <CardHeader
          title={<Typography variant="body2">{product?.title}</Typography>}
          action={
            <IconButton>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Grid item container xs={12} className={classes.cardContent}>
            <img
              src={product?.image_url}
              alt="prodImg"
              className={classes.cardImg}
            />
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container className={classes.cardBottom}>
            <Grid item xs={6}>
              <Counter productCount={product?.count} />
            </Grid>
            <Grid item xs={4}>
              {product?.price}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
