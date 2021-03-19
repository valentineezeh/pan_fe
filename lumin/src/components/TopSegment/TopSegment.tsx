import {
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import { TopSegmentStyle } from "./TopSegment.style";

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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">
              Filter by
            </InputLabel>
            <Select native></Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopSegment;
