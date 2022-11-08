import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Loader from "react-loader-spinner";

import { ProductSegmentStyle } from "./ProductSegment.style";
import { fetchProducts } from "./ProductSlice";
import { ProductCard } from "./ProductCard";
import { RootState } from "../../store/store";

const ProductSegment = () => {
  const classes = ProductSegmentStyle();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, isLoading } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <div className={classes.root}>
      <Grid container>
        {isLoading && (
          <Grid container justify="center">
            <Loader type="Circles" color="#51594f" height={800} />
          </Grid>
        )}
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductSegment;
