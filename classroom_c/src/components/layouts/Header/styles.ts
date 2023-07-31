import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    root: {
      width: "100%",
      height: "88px",
      backgroundColor: "rgba(200, 200, 200, 0.8)",
    },
    container: {
      maxWidth: "1440px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  {
    name: "header"
  }
);
export default useStyles;
