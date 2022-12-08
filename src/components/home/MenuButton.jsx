import { useState } from 'react';
import classes from './MenuButton.module.scss';
import { motion } from 'framer-motion';

const MenuButton = () => {

    const [open, setOpen] = useState(false);

    const menuHandler = () => {
        setOpen(prev => !prev)
    }

    const flex = {
        open: {
            justifyContent: 'space-around',
            rotateZ: '270deg',
            transition: {
                duration: .5
            }
        },
        close: {
            justifyContent: 'space-around',
            rotateZ: '0deg',
            transition: {
                duration: .5
            }
        }
    }

    const grow = [{
        open: {
            translateX: '1.2rem',
            width: '10%',
            transition: {
                duration: .5
            }
        },
        close: {
            translateX: '0rem',
            width: '70%',
            transition: {
                duration: .5
            }
        }
    },{
        open: {
            translateX: '1.2rem',
            width: '10%',
            transition: {
                duration: .5
            }
        },
        close: {
            translateX: '0rem',
            width: '40%',
            transition: {
                duration: .5
            }
        }
    },{
        open: {
            translateX: '1.2rem',
            width: '10%',
            transition: {
                duration: .5
            }
        },
        close: {
            translateX: '0rem',
            width: '90%',
            transition: {
                duration: .5
            }
        }
    }]

    return (
        <motion.button
            className={classes.menu}
            onClick={menuHandler}
            variants={flex}
            animate={open ? 'open' : 'close'}
        >
            <motion.div className={classes.line} variants={grow[0]}></motion.div>
            <motion.div className={classes.line} variants={grow[1]}></motion.div>
            <motion.div className={classes.line} variants={grow[2]}></motion.div>
        </motion.button>
    );
}

export default MenuButton;