import classes from "./LinkIcon.module.scss";
import { NavLink } from "react-router-dom";

const LinkIcon = ({ source, alt, href, isRoute, left }) => {

  const styles = {
    marginLeft: left ? 'auto' : 'unset', 
  }

  if (isRoute) {
    return (
      <NavLink
        style={styles}
        to={href}
        className={({ isActive }) =>
          isActive ? classes.active : undefined
        }
      >
        <li className={classes.link}>
          <img src={source} alt={alt} />
        </li>
      </NavLink>
    );
  } else {
    return (
      <a href={href} target='_blank' rel="noreferrer">
        <li className={classes.link}>
          <img src={source} alt={alt} />
        </li>
      </a>
    );
  }

}

export default LinkIcon;