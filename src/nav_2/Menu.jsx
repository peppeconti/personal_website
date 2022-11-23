import { useState } from 'react';
import classes from "./Menu.module.scss";

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuHandler = () => {
        setIsOpen(prev => !prev);
    }

    const open = isOpen ? classes.open : undefined;
    const classesArray = [classes.hamburger, open];

    return (
        <button type='button' className={classesArray.join(' ')} onClick={menuHandler}>
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </button>
    );
}

export default Menu;