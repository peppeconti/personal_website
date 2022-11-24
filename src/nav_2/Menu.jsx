import { useState, Fragment, } from 'react';
import Modal from './Modal';
import classes from "./Menu.module.scss";

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
            {isOpen && <Modal />}
        </Fragment>
    );
}

export default Menu;