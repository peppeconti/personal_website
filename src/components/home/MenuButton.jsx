import { useState } from 'react';
import classes from './MenuButton.module.scss';
import { motion } from 'framer-motion';

const MenuButton = () => {

    const [open, setOpen] = useState(false);

    const menuHandler = () => {
        setOpen(prev => !prev)
    }

    return (
        <motion.button
            className={classes.menu}
            onClick={menuHandler}
            data-open={open}
        >
            <motion.div className={classes.line} animate={open ? { width: '5px' } : { width: '70%' }}></motion.div>
            <motion.div className={classes.line} animate={open ? { width: '5px' } : { width: '40%' }}></motion.div>
            <motion.div className={classes.line} animate={open ? { width: '5px' } : { width: '90%' }}></motion.div>
        </motion.button>
    );
}

export default MenuButton;