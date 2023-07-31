import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      width: "100%",
      height: "80px",
      backgroundColor: "rgba(200, 200, 200, 0.8)"
    },
    container: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1440px",
    },
    cpr: {
      color: "dark green",
      fontSize: "0.8em",
    }
  },
  {
      name: "footer"
  }
);

export default useStyles;