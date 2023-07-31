import Navigation from "../../Navigation";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <Navigation/>
      </div>
    </header>
  )
}

export default Header;