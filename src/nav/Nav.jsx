import { useId } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Nav.module.scss';
import NavLink from './LinkIcon';
import Menu from './Menu';
import home from '../assets/home.svg'
import envelope from '../assets/envelope-solid.svg';
import info from '../assets/circle-info-solid.svg';
import laptop from '../assets/laptop-code-solid.svg';
import { motion as m } from 'framer-motion';

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

  const navAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .4,
        delayChildren: .8,
      } 
    },
    exit: {
      transition: {
        staggerChildren: .3,
      } 
    }
  }

  if (location.pathname === '/') {
    return (
      <header className={classes.header__home}>
        <nav>
          <m.ul variants={navAnimation} initial='hidden' animate='visible' exit='exit'>
            <NavLink href='/about' source={info} alt='about page' isRoute />
            <NavLink href='/portfolio' source={laptop} alt='portfolio page' isRoute />
            <NavLink href='/contact' source={envelope} alt='contact page' isRoute />
          </m.ul>
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
            <NavLink href={'/'} source={home} alt="home" isRoute />
            {active.map(e => <NavLink key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
            {inactive.map((e, i) => <NavLink key={e.id} href={e.to} source={e.icon} alt={e.alt} left={i === 0 ? true : false} isRoute />)}
          </ul>
        </nav>
        <Menu />
      </header>
    );
  }
}

export default Nav;