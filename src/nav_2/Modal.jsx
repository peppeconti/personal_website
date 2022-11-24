import { useId } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import classes from "./Menu.module.scss";
import { motion as m, AnimatePresence } from 'framer-motion';
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
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            y: "100vh",
            opacity: 0,
        },
    };

    const flip = {
        hidden: {
            transform: "scale(0) rotateX(-360deg)",
            opacity: 0,
            transition: {
                delay: 0.3,
            },
        },
        visible: {
            transform: " scale(1) rotateX(0deg)",
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            transform: "scale(0) rotateX(360deg)",
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const active = icons.filter(e => e.to === location.pathname);
    const inactive = icons.filter(e => e.to !== location.pathname);

    const content = <m.nav
        className={classes.modal}
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        <ul>
            <LinkIcon key={useId()} href={'/'} source={home} alt="home" isRoute />
            {active.map(e => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
            {inactive.map((e, i) => <LinkIcon key={e.id} href={e.to} source={e.icon} alt={e.alt} isRoute />)}
        </ul>
    </m.nav>

    return createPortal(<AnimatePresence>{content}</AnimatePresence>, document.getElementById('overlay'));

}

export default Modal;