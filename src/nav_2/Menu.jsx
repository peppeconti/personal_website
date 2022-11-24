import { useState, Fragment, } from 'react';
import Modal from './Modal';
import classes from "./Menu.module.scss";
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { motion as m } from 'framer-motion';

const Menu = () => {

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const menuHandler = () => {
        setIsOpen(prev => !prev);
    }

    const open = isOpen ? classes.open : undefined;
    const classesArray = [classes.hamburger, open];

    return (
        <Fragment>
                <button
                    type='button'
                    className={classesArray.join(' ')}
                    onClick={menuHandler}
                >
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                </button>
            <AnimatePresence
                initial={false}
                onExitComplete={() => null}
            >
                {isOpen && <Modal location={location} key={location.pathname} />}
            </AnimatePresence>
        </Fragment>
    );
}

export default Menu;