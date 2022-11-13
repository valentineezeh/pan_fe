import { makeStyles } from "@material-ui/core";

export const CheckoutStyle = makeStyles(() => ({
  root: {
    // flexGrow: 1,
    margin: "40px 0px 40px 0px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    height: "700px",
    width: "80%",
    backgroundColor: "white",
    margin: "auto",
    padding: "40px 40px 0px 40px",
  },
  hr: {
    display: "block",
    height: "1px",
    border: 0,
    borderTop: "1px solid #ccc",
    margin: "1em 0",
    padding: 0,
  },
  paymentMethod: {
    display: "flex",
    flexDirection: "column",
    height: 150,
    width: "80%",
    margin: "auto",
    padding: "0px 40px 0px 40px",
  },
  icon: {
    height: 50,
    width: 50,
    padding: 20,
    cursor: "pointer",
  },
  image: {
    width: 50,
    height: 50,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  prodCount: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    marginLeft: "45px",
    zIndex: 1,
    height: "20px",
    width: "20px",
    borderRadius: "100%",
    backgroundColor: "#575f63",
    color: "#fff",
  },
}));
