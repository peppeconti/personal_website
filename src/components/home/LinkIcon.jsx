import "./LinkIcon.css";
import { Link } from "react-router-dom";

const LinkIcon = ({ source, alt, href }) => {
  return (
    <Link to={href} href={href}>
      <li className="link">
        <img src={source} alt={alt} />
      </li>
    </Link>
  );
}

export default LinkIcon;