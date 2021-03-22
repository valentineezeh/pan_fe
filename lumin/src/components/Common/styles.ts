import { makeStyles } from "@material-ui/core/styles";

export const CommonStyles = makeStyles((theme) => ({
  counterContainer: {
    height: 40,
    width: 100,
    background: "#ffff",
    border: "1px solid black",
  },
  counterAction: {
    cursor: "pointer",
  },
  filterOption: {
    margin: theme.spacing(2, 4),
    cursor: "pointer",
  },
}));
