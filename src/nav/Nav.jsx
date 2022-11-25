import { useId } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Nav.module.scss';
import LinkIcon from './LinkIcon';
import Menu from './Menu';
import home from '../assets/home.svg'
import envelope from '../assets/envelope-solid.svg';
import info from '../assets/circle-info-solid.svg';
import laptop from '../assets/laptop-code-solid.svg';

const Nav = ({ text }) => {

  const location = useLocation();

  const icons = [
    {
      to: '/about',
      icon: info,
      alt: 'about',
      id: useId()
    },
    {
      to: '/portfolio',
      icon: laptop,
      id: useId()
    },
    {
      to: '/contact',
      icon: envelope,
      id: useId()
    }
  ];

  if (location.pathname === '/') {
    return (
      <header className={classes.header__home}>
        <nav>
          <ul>
            <LinkIcon href='/about' source={info} alt='about page' isRoute />
            <LinkIcon href='/portfolio' source={laptop} alt='portfolio page' isRoute />
            <LinkIcon href='/contact' source={envelope} alt='contact page' isRoute />
          </ul>
        </nav>
      </header>
    )
  } else {

    const active = icons.filter(e => e.to === location.pathname);
    const inactive = icons.filter(e => e.to !== location.pathname);

    return (
      <header className={classes.header__pages}>
        <h1><span>{text}</span></h1>
        <nav className={classes.desktop}>
          <ul>
            <LinkIcon href={'/'} source={home} alt="home" isRoute />
            {active.map(e => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
            {inactive.map((e, i) => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} left={i === 0 ? true : false} isRoute />)}
          </ul>
        </nav>
        <Menu />
      </header>
    );
  }
}

export default Nav;