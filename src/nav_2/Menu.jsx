import { useState, Fragment, } from 'react';
import Modal from './Modal';
import classes from "./Menu.module.scss";
import { AnimatePresence } from 'framer-motion';

const Menu = () => {

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
                mode={'wait'}
                onExitComplete={() => null}
            >
                {isOpen && <Modal />}
            </AnimatePresence>
        </Fragment>
    );
}

export default Menu;