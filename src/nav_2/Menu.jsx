import { useState, Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from "./Menu.module.scss";
import { motion as m } from 'framer-motion';

const Modal = () => {
    return (
        <m.nav className={classes.modal} exit={{ opacity: 0 }} transition={{duration: 10}}>
            <ul>

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