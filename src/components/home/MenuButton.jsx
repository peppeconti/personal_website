import { useState } from 'react';
import classes from './MenuButton.module.scss';

const MenuButton = () => {

    const [open, setOpen] = useState(false);

    const menuHandler = () => {
        setOpen(prev => !prev )
    }

    const classesList = open ? classes.line + ' ' + classes.point : classes.line;

    return (
        <button className={classes.menu} onClick={menuHandler}>
            <div className={classesList}></div>
            <div className={classesList}></div>
            <div className={classesList}></div>
        </button>
    );
}

export default MenuButton;