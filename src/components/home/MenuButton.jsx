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
            layout
            className={classes.menu}
            onClick={menuHandler}
            animate={open ? { rotateZ: 90 } : { rotateZ: 0 }}
            data-open={open}
        >
            <motion.div layout className={classes.line} animate={open ? { width: '5px', margin: '0' } : { width: '70%', margin: '4px 0' }}></motion.div>
            <motion.div layout className={classes.line} animate={open ? { width: '5px', margin: '0' } : { width: '40%', margin: '4px 0' }}></motion.div>
            <motion.div layout className={classes.line} animate={open ? { width: '5px', margin: '0' } : { width: '90%', margin: '4px 0' }}></motion.div>
        </motion.button>
    );
}

export default MenuButton;