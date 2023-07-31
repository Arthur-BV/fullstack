import { Link } from "react-router-dom";
import useStyles from "./styles";

const Navigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navList}>
      <li>
          <Link to="/" className={classes.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Users" className={classes.navItem}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/ClassRooms" className={classes.navItem}>
            ClassRooms
          </Link>
        </li>
        <li>
          <Link to="/Groups" className={classes.navItem}>
            Groups
          </Link>
        </li>
        <li>
          <Link to="/Lessons" className={classes.navItem}>
            Lessons
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;