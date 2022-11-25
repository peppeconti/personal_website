import { useId } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import classes from "./Modal.module.scss";
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

    const dropIn = {
        hidden: {
            y: '-100vh',
            x: '-50%',
            opacity: 0,
        },
        visible: {
            //transform: 'translate(-50%, 0)',
            y: '0',
            x: '-50%',
            opacity: 1,
            transition: {
                duration: 0.3,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            y: '100vh',
            opacity: 0,
        },
    };

    const active = icons.filter(e => e.to === location.pathname);
    const inactive = icons.filter(e => e.to !== location.pathname);

    const content = <m.nav
        location={location} key={location.pathname}
        className={classes.modal}
        variants={dropIn}
    >
        <ul>
            <LinkIcon key={useId()} href={'/'} source={home} alt="home" isRoute />
            {active.map(e => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
            {inactive.map((e, i) => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
        </ul>
    </m.nav>

    return createPortal(content, document.getElementById('overlay'));

}

export default Modal;