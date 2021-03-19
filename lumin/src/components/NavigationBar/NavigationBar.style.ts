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
    width: 1170,
    margin: "auto",
  },
  grow: {
    flexGrow: 1,
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
  },
  NavLeftItem: {
    fontSize: "11px",
    color: "#a1a1a1",
    justifyContent: "left",
    textTransform: "none",
  },
  NavRightItem: {
    fontSize: "11px",
    color: "#a1a1a1",
    // justifyContent:"right",
    textTransform: "none",
  },
});
