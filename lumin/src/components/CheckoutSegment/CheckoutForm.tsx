import React from "react";
import {
  Grid,
  TextField,
  Checkbox,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import { CheckoutStyle } from "./Checkout.style";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ReactComponent as PayPalLogo } from "../../assets/paypal-logo-svgrepo-com.svg";
import { ReactComponent as MasterCardLogo } from "../../assets/mastercard-svgrepo-com.svg";
import { ReactComponent as AppleCardLogo } from "../../assets/applepay-svgrepo-com.svg";
import { ReactComponent as GoogleCardLogo } from "../../assets/googlepay-svgrepo-com.svg";
import { ReactComponent as VisaCardLogo } from "../../assets/visa-svgrepo-com.svg";

const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        marginRight: theme.spacing(1),
        width: "23ch",
        marginTop: "30px",
      },
    },
  })
);

export const CheckoutForm = () => {
  const classes = CheckoutStyle();
  const formStyle = useFormStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Grid className={classes.checkoutFormCont}>
        <Typography variant="h6">Shipping Address</Typography>
        <TextField
          id="outlined-search"
          label="Email"
          type="email"
          variant="outlined"
          className={classes.input}
        />
        <form className={formStyle.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="First name"
            variant="outlined"
            className={classes.input}
          />
          <TextField
            id="outlined-basic"
            label="Last name"
            variant="outlined"
            className={classes.input}
          />
        </form>
        <TextField
          id="outlined-search"
          label="Street Address"
          type="text"
          variant="outlined"
          className={classes.input}
        />
        <TextField
          id="outlined-search"
          label="Apartment, Suite, etc"
          type="text"
          variant="outlined"
          className={classes.input}
        />
        <TextField
          id="outlined-search"
          label="City"
          type="text"
          variant="outlined"
          className={classes.input}
        />
        <TextField
          id="outlined-search"
          label="Post code"
          type="text"
          variant="outlined"
          className={classes.input}
        />
        <TextField
          id="outlined-search"
          label="Country"
          type="text"
          variant="outlined"
          className={classes.input}
        />

        <div className={classes.checkbox}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <Typography variant="body1">
            I agree to receive email promotions, offers, and updates from
            Maoluxury. View our Privacy Policy & Terms of Service.
          </Typography>
        </div>
        <Button variant="contained" className={classes.saveShipmentBtn}>
          Confirm Shipping Information
        </Button>
      </Grid>
      <div style={{ marginTop: "30px" }}>
        <Paper className={classes.paymentMethod}>
          <h3>Accepted Payment Methods</h3>
          <Grid container item xs direction="row">
            <PayPalLogo className={classes.icon} />
            <MasterCardLogo className={classes.icon} />
            <AppleCardLogo className={classes.icon} />
            <GoogleCardLogo className={classes.icon} />
            <VisaCardLogo className={classes.icon} />
          </Grid>
        </Paper>
      </div>
    </>
  );
};
