import classes from './Hero.module.scss';
import { motion as m } from 'framer-motion';

const Hero = () => {

    const opening = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: .5,
                delayChildren: 2.1
            }
        }
    }

    const fadeIn = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: .5
            }
        }
    }

    return (
        <m.div variants={opening} initial='hidden' whileInView="visible"
        viewport={{ once: true }} className={classes.hero}>
            <m.h1 variants={fadeIn}>Giuseppe Conti</m.h1>
            <m.h2 variants={fadeIn}>Web Developer</m.h2>
        </m.div>
    );
}

export default Hero;