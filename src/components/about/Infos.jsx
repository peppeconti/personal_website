import { useRef } from 'react';
import classes from './Infos.module.scss';
import about from '../../assets/laptop.svg';
import { motion, useScroll } from 'framer-motion';

const Infos = () => {

    return (
        <article className={classes.infos}>
            <div className={classes.image}>
                <img src={about} alt='about me'/>
            </div>
            <div className={classes.curriculum}></div>
        </article>
    );
}

export default Infos;