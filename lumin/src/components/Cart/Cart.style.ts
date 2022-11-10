import { makeStyles } from "@material-ui/core/styles";

export const CartStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 2),
  },
  icon: {
    height: 30,
    width: 30,
    cursor: "pointer",
  },
  cartTitle: {
    fontFamily: "roboto",
    fontSize: 14,
    color: "#6f7566",
    fontWeight: 700,
    letterSpacing: 2,
    paddingTop: theme.spacing(2),
  },
  formControl: {
    marginTop: 22,
    width: 100,
    background: "#ffff",
  },
  cardContainer: {
    minWidth: "100%",
    height: "100%",
    marginTop: theme.spacing(4),
  },
  cardContent: {
    width: "40px",
    height: "40px",
  },
  cardImg: {
    minWidth: "100%",
    minHeight: "100%",
    paddingLeft: "380px",
  },
  cardBottom: {
    margin: theme.spacing("auto", 1),
  },
  cartBottom: {
    marginTop: theme.spacing(20),
  },
  subscriptionButton: {
    border: "0.5px solid black",
    background: "#ffff !important",
    color: "black",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    fontFamily: "roboto",
    fontSize: 14,
  },
  checkoutButton: {
    border: "none",
    background: "#51594f !important",
    color: "#ffff",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    fontFamily: "roboto",
    fontSize: 14,
    width: 510,
  },
  totalAmount: {
    paddingLeft: "183px",
  },
}));
