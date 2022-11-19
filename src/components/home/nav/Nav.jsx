import './Nav.css';
import LinkIcon from '../LinkIcon';
import envelope from '../../../assets/envelope-solid.svg';
import info from '../../../assets/circle-info-solid.svg';
import laptop from '../../../assets/laptop-code-solid.svg';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <LinkIcon href={'/about'} source={info} alt="about me"/>
        <LinkIcon href={'/contact'} source={envelope} alt="contact me"/>
        <LinkIcon href={'/portfolio'} source={laptop} alt="portfolio"/>
      </ul>
    </nav>
  );
}

export default Nav;