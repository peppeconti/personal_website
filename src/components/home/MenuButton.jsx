import { useState } from 'react';
import classes from './MenuButton.module.scss';
import { motion } from 'framer-motion';

const MenuButton = () => {

    const [open, setOpen] = useState(false);

    const menuHandler = () => {
        setOpen(prev => !prev )
    }

    //const classesList = open ? classes.line + ' ' + classes.point : classes.line;

    return (
        <button className={classes.menu} onClick={menuHandler}>
            <motion.div className={classes.line} animate={open ? { width: '5px'} : { width: '70%'} }></motion.div>
            <motion.div className={classes.line} animate={open ? { width: '5px'} : { width: '40%'} }></motion.div>
            <motion.div className={classes.line} animate={open ? { width: '5px'} : { width: '90%'} }></motion.div>
        </button>
    );
}

export default MenuButton;