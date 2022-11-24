import { useState, Fragment, useId,} from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import classes from "./Menu.module.scss";
import { motion as m } from 'framer-motion';
import LinkIcon from './LinkIcon';
import home from '../assets/home.svg'
import envelope from '../assets/envelope-solid.svg';
import info from '../assets/circle-info-solid.svg';
import laptop from '../assets/laptop-code-solid.svg';

const Modal = () => {

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

    return (
        <m.nav className={classes.modal} exit={{ opacity: 0 }} transition={{ duration: 10 }}>
            <ul>
                <LinkIcon key={useId()} href={'/'} source={home} alt="home" isRoute />
                {active.map(e => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
                {inactive.map((e, i) => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
            </ul>
        </m.nav>
    )
}

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuHandler = () => {
        setIsOpen(prev => !prev);
    }

    const open = isOpen ? classes.open : undefined;
    const classesArray = [classes.hamburger, open];

    return (
        <Fragment>
            <button type='button' className={classesArray.join(' ')} onClick={menuHandler}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
            </button>
            {isOpen && createPortal(<Modal />, document.getElementById('overlay'))}
        </Fragment>
    );
}

export default Menu;