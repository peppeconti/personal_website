import "./LinkIcon.css";
import { NavLink } from "react-router-dom";

const LinkIcon = ({ source, alt, href, isRoute }) => {

  if (isRoute) {
    return (
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? 'active' : undefined
        }
      >
        <li className="link">
          <img src={source} alt={alt} />
        </li>
      </NavLink>
    );
  } else {
    return (
      <a href={href} target='_blank'>
        <li className="link">
          <img src={source} alt={alt} />
        </li>
      </a>
    );
  }


}

export default LinkIcon;