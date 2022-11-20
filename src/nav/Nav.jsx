import { useLocation } from 'react-router-dom';
import styles from './Nav.module.scss';
import LinkIcon from './LinkIcon';
import envelope from '../assets/envelope-solid.svg';
import info from '../assets/circle-info-solid.svg';
import laptop from '../assets/laptop-code-solid.svg';
import { motion as m } from 'framer-motion';

const Nav = () => {

  const location = useLocation();

  const listClass =  location.pathname !== '/' ? 'page' : undefined;

  return (
    <m.nav className={styles.nav} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
      <ul className={listClass}>
        <LinkIcon href={'/about'} source={info} alt="about me" isRoute/>
        <LinkIcon href={'/portfolio'} source={laptop} alt="portfolio" isRoute/>
        <LinkIcon href={'/contact'} source={envelope} alt="contact me" isRoute/>
      </ul>
    </m.nav>
  );
}

export default Nav;