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
import { inputValidation, Props } from "./utils";

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
  const [shippingAdd, setShippingAdd] = React.useState<Props>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    number: "",
    city: "",
    postCode: "",
    country: "",
    errors: {},
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const validateForm = () => {
    const { errors, isFormValid } = inputValidation(shippingAdd);
    if (!isFormValid) {
      setShippingAdd({ ...shippingAdd, errors });
      return isFormValid;
    }
    return isFormValid;
  };

  const onSubmitShippingInfo = () => {
    if (validateForm()) setShippingAdd({ ...shippingAdd, errors: {} });
  };

  return (
    <>
      <Grid className={classes.checkoutFormCont}>
        <Typography variant="h6">Shipping Address</Typography>
        <TextField
          error={!!shippingAdd?.errors?.email}
          id="outlined-search"
          label="Email"
          type="email"
          variant="outlined"
          className={classes.input}
          helperText={shippingAdd?.errors?.email}
          onChange={(e) =>
            setShippingAdd({
              ...shippingAdd,
              email: e.target.value,
              errors: {
                ...shippingAdd.errors,
                email: "",
              },
            })
          }
        />
        <form className={formStyle.root} noValidate autoComplete="off">
          <TextField
            error={!!shippingAdd?.errors?.firstName}
            id="outlined-basic"
            label="First name"
            variant="outlined"
            className={classes.input}
            helperText={shippingAdd?.errors?.firstName}
            onChange={(e) =>
              setShippingAdd({
                ...shippingAdd,
                firstName: e.target.value,
                errors: {
                  ...shippingAdd.errors,
                  firstName: "",
                },
              })
            }
          />
          <TextField
            error={!!shippingAdd?.errors?.lastName}
            id="outlined-basic"
            label="Last name"
            variant="outlined"
            className={classes.input}
            helperText={shippingAdd?.errors?.lastName}
            onChange={(e) =>
              setShippingAdd({
                ...shippingAdd,
                lastName: e.target.value,
                errors: {
                  ...shippingAdd.errors,
                  lastName: "",
                },
              })
            }
          />
        </form>
        <TextField
          error={!!shippingAdd?.errors?.address}
          id="outlined-search"
          label="Street Address"
          type="text"
          variant="outlined"
          className={classes.input}
          helperText={shippingAdd?.errors?.address}
          onChange={(e) =>
            setShippingAdd({
              ...shippingAdd,
              address: e.target.value,
              errors: {
                ...shippingAdd.errors,
                address: "",
              },
            })
          }
        />
        <TextField
          error={!!shippingAdd?.errors?.number}
          id="outlined-search"
          label="Apartment, Suite, etc"
          type="text"
          variant="outlined"
          className={classes.input}
          helperText={shippingAdd?.errors?.number}
          onChange={(e) =>
            setShippingAdd({
              ...shippingAdd,
              number: e.target.value,
              errors: {
                ...shippingAdd.errors,
                number: "",
              },
            })
          }
        />
        <TextField
          error={!!shippingAdd?.errors?.city}
          id="outlined-search"
          label="City"
          type="text"
          variant="outlined"
          className={classes.input}
          helperText={shippingAdd?.errors?.city}
          onChange={(e) =>
            setShippingAdd({
              ...shippingAdd,
              city: e.target.value,
              errors: {
                ...shippingAdd.errors,
                city: "",
              },
            })
          }
        />
        <TextField
          error={!!shippingAdd?.errors?.postCode}
          id="outlined-search"
          label="Post code"
          type="text"
          variant="outlined"
          className={classes.input}
          helperText={shippingAdd?.errors?.postCode}
          onChange={(e) =>
            setShippingAdd({
              ...shippingAdd,
              postCode: e.target.value,
              errors: {
                ...shippingAdd.errors,
                postCode: "",
              },
            })
          }
        />
        <TextField
          error={!!shippingAdd?.errors?.country}
          id="outlined-search"
          label="Country"
          type="text"
          variant="outlined"
          className={classes.input}
          helperText={shippingAdd?.errors?.country}
          onChange={(e) =>
            setShippingAdd({
              ...shippingAdd,
              country: e.target.value,
              errors: {
                ...shippingAdd.errors,
                country: "",
              },
            })
          }
        />

        <div className={classes.checkbox}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <Typography variant="body1" style={{ marginTop: "8px" }}>
            I agree to receive email promotions, offers, and updates from
            Maoluxury. View our Privacy Policy & Terms of Service.
          </Typography>
        </div>
        <Button
          variant="contained"
          className={classes.saveShipmentBtn}
          onClick={onSubmitShippingInfo}
        >
          Confirm Shipping Information
        </Button>

        <div style={{ marginTop: "20px" }}>
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
      </Grid>
    </>
  );
};
