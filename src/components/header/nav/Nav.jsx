import './Nav.css';
import Link from '../Link';
import envelope from '../../../assets/envelope-solid.svg';
import info from '../../../assets/circle-info-solid.svg';
import laptop from '../../../assets/laptop-code-solid.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <Link source={info} alt="about me"/>
        <Link source={envelope} alt="about me"/>
        <Link source={laptop} alt="about me"/>
      </ul>
    </nav>
  );
}

export default Nav;