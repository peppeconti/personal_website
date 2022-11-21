import classes from './Nav.module.scss';
import LinkIcon from './LinkIcon';
import envelope from '../assets/envelope-solid.svg';
import info from '../assets/circle-info-solid.svg';
import laptop from '../assets/laptop-code-solid.svg';

const Nav = () => {

  return (
    <nav className={classes.nav}>
      <ul>
        <LinkIcon href={'/about'} source={info} alt="about me" isRoute/>
        <LinkIcon href={'/portfolio'} source={laptop} alt="portfolio" isRoute/>
        <LinkIcon href={'/contact'} source={envelope} alt="contact me" isRoute/>
      </ul>
    </nav>
  );
}

export default Nav;