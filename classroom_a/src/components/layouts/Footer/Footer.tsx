import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.root}>
        <div className={classes.container}>
          <span className={classes.cpr}>&copy; Copyright by Arthur V. Babayan</span>
        </div>
      </footer>
    </>
  )
}

export default Footer;