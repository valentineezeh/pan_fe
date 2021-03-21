import { Grid, Typography } from "@material-ui/core";
import { TopSegmentStyle } from "./TopSegment.style";
import { FilterInput } from "../Common/FilterInput";

const TopSegment = () => {
  const classes = TopSegmentStyle();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={6} xs={12} container direction="column">
          <Grid item xs>
            <Typography variant="h4" className={classes.segmentTitle}>
              All Products
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.formContainer}
            >
              A 360 look at Lumin
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          container
          justify="flex-end"
          className={classes.formContainer}
        >
          <FilterInput
            className={classes.formControl}
            filterParams={"Filter by"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TopSegment;
