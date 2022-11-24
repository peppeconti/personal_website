import { useState, Fragment, } from 'react';
import Modal from './Modal';
import classes from "./Menu.module.scss";
import { motion as m, AnimatePresence } from 'framer-motion';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuHandler = () => {
        setIsOpen(prev => !prev);
    }

    const open = isOpen ? classes.open : undefined;
    const classesArray = [classes.hamburger, open];

    return (
        <Fragment>
            <m.button
                type='button'
                className={classesArray.join(' ')}
                onClick={menuHandler}
            >
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
            </m.button>
            <AnimatePresence
                initial={false}
                mode={'wait'}
            >
                {isOpen && <Modal />}
            </AnimatePresence>
        </Fragment>
    );
}

export default Menu;