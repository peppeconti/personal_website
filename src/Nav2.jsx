import { useId } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Nav2.module.scss';
import LinkIcon from './nav/LinkIcon';
import home from './assets/home.svg'
import envelope from './assets/envelope-solid.svg';
import info from './assets/circle-info-solid.svg';
import laptop from './assets/laptop-code-solid.svg';

const Nav2 = ({ text }) => {

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

  const active = icons.filter(e => e.to === location.pathname);
  const inactive = icons.filter(e => e.to !== location.pathname);

  const page = location.pathname !== '/' ? classes.page : undefined;
  const classesArray = [classes.header, page];

  return (
    <header className={classesArray.join(' ')}>
      <h1><span>{text}</span></h1>
      <nav>
        <ul>
          <LinkIcon key={useId()} href={'/'} source={home} alt="home" isRoute />
          {active.map(e => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
          {inactive.map((e, i) => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} left={i === 0 ? true : false} isRoute />)}
        </ul>
      </nav>
      <button className={classes.hamburger}></button>
    </header>
  );
}

export default Nav2;