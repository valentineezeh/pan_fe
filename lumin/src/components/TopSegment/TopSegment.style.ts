import { makeStyles } from "@material-ui/core/styles";

export const TopSegmentStyle = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "80%",
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  segmentTitle: {
    fontSize: "44px",
    fontFamily: "Playfair Display",
  },
  formContainer: {
    marginTop: theme.spacing(4),
  },
  formControl: {
    marginTop: 22,
    minWidth: 320,
  },
}));
