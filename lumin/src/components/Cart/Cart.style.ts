import { makeStyles } from "@material-ui/core/styles";

export const CartStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 2),
  },
  icon: {
    height: 30,
    width: 30,
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
    width: "30px",
    height: "30px",
  },
  cardImg: {
    minWidth: "100%",
    minHeight: "100%",
  },
  cardBottom: {
    margin: theme.spacing("auto", 1),
  },
}));
