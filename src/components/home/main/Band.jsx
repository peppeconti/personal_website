import classes from './Band.module.scss';
import { motion as m } from 'framer-motion';

const Band = ({ gradient, start, end, text }) => {

    const style = {
        background: `linear-gradient(${gradient})`,
        gridRowStart: `${start}`,
        gridRowEnd: `${end}`
    };

    const fadeIn = {
        hidden: {
            opacity: 0,
            y: '70%'
        },
        visible: {
            opacity: 1,
            y: '0',
            transition: {
                duration: .6,
                ease: 'easeOut'
            }
        },
        exit: {
            opacity: 0,
            y: '70%',
            transition: {
                duration: .3,
                ease: 'easeOut'
            } 
          }
    }

    return (
        <m.div className={classes.band} style={style} variants={fadeIn}>
            <p className={classes.text}><span>{text}</span></p>
        </m.div>
    );
}

export default Band;