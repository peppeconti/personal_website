import { useRef } from 'react';
import classes from './Infos.module.scss';
import { motion, useScroll } from 'framer-motion';

const Infos = () => {

    return (
        <article className={classes.infos}>
            <div
                className={classes.image}
            >About me</div>
            <div className={classes.curriculum}></div>
        </article>
    );
}

export default Infos;