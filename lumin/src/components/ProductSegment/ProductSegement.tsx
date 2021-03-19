import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductSegmentStyle } from "./ProductSegment.style";
import { fetchProducts } from "./ProductSlice";

const ProductSegment = () => {
  const classes = ProductSegmentStyle();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <div className={classes.root}></div>;
};

export default ProductSegment;
