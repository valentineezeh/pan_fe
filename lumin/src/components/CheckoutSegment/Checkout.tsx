import { Grid, Typography } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import { ProductData } from "../ProductSegment/ProductSlice";
import { CheckoutStyle } from "./Checkout.style";

export const ProductCard = ({
  prod,
  currencySymbol,
}: {
  prod: ProductData;
  currencySymbol: string;
}) => {
  const classes = CheckoutStyle();

  return (
    <Grid
      container
      spacing={2}
      style={{
        width: "100%",
        height: "50px",
        marginBottom: "75px",
      }}
    >
      <span className={classes.prodCount}>{prod.count}</span>
      <Grid item>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src={prod.image_url} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {prod.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ID: {prod.id}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ paddingTop: "30px" }}>
            {currencySymbol}
            {prod.price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
