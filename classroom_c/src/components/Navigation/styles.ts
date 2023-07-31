import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    navigation: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      marginRight: "99px"
    },
    navList: {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      columnGap: "20px",
    },
    navItem: {
      '&:hover': {
        textShadow: "0 0 4px #00FF9C",
      },
      // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1 )",
      color: "#414840",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
      letterSpacing: "2.1px",
      textTransform: "uppercase",      
      textDecoration: "none",
    },
    navButton: {
      width: "120px",
      height: "35px",
    }
  },
  {
    name: "nav"
  }
);

export default useStyles;