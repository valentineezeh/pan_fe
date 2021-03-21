import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

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

  const { products } = useSelector((state: RootState) => state.productReducer);

  return (
    <div className={classes.root}>
      <Grid container>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductSegment;
