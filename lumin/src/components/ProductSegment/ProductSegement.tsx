import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Loader from "react-loader-spinner";

import TopSegment from "../TopSegment/TopSegment";
import { ProductSegmentStyle } from "./ProductSegment.style";
import { fetchProducts } from "./ProductSlice";
import { ProductCard } from "./ProductCard";
import { RootState } from "../../store/store";

const ProductSegment = ({
  onShowSideBar,
  showSideBar,
  setCurrency,
  currency,
}: {
  showSideBar: boolean;
  onShowSideBar: () => void;
  setCurrency: (value: string) => void;
  currency: string;
}) => {
  const classes = ProductSegmentStyle();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ currency }));
  }, [dispatch, currency]);

  const { products, isLoading } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <>
      <TopSegment />
      <div className={classes.root}>
        <Grid container>
          {isLoading ? (
            <Grid container justify="center">
              <Loader type="Circles" color="#51594f" height={800} />
            </Grid>
          ) : products?.length === 0 ? (
            <Grid container justify="center">
              <h1>Product not found</h1>
            </Grid>
          ) : (
            products?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setCurrency={setCurrency}
                currency={currency}
                onShowSideBar={onShowSideBar}
                showSideBar={showSideBar}
              />
            ))
          )}
        </Grid>
      </div>
    </>
  );
};

export default ProductSegment;
