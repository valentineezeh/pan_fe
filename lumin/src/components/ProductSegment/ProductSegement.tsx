import { ProductSegmentStyle } from "./ProductSegment.style";

const ProductSegment = () => {
  const classes = ProductSegmentStyle();

  return <div className={classes.root}></div>;
};

export default ProductSegment;
