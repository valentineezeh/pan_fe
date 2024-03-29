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
import {
  ProductData,
  removeProductFromCart,
} from "../ProductSegment/ProductSlice";
import { useDispatch } from "react-redux";

interface Props {
  product?: ProductData;
}

export const CartProductCard = ({ product }: Props) => {
  const classes = CartStyle();
  const dispatch = useDispatch();

  const onRemoveProdFromCart = (prod: ProductData) => {
    dispatch(removeProductFromCart(prod));
  };

  return (
    <Grid container>
      <Card className={classes.cardContainer}>
        <CardHeader
          title={<Typography variant="body2">{product?.title}</Typography>}
          action={
            <IconButton onClick={() => onRemoveProdFromCart(product!)}>
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
              <Counter
                productCount={product?.count}
                productId={Number(product?.id)}
                productPrice={Number(product?.price)}
              />
            </Grid>
            <Grid item xs={4}>
              {`${product?.price}`}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
