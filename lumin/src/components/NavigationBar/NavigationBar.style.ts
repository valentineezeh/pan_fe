import { makeStyles } from "@material-ui/core/styles";

export const NavigationStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "#fff",
    backgroundSize: "cover",
  },
  container: {
    width: "100%",
    margin: "auto",
  },
  grow: {
    flexGrow: 1,
  },
  mainLogo: {
    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
  },
  logoText: {
    fontFamily: "Oxygen",
    letterSpacing: 20,
  },
  buttonFontSize: {
    fontSize: "14px",
    textTransform: "none",
  },
});
