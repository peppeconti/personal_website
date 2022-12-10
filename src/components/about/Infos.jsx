import { useRef } from 'react';
import classes from './Infos.module.scss';
import { motion, useScroll } from 'framer-motion';

const Infos = () => {

    //const { scrollYProgress } = useScroll();

    const scrollRef = useRef(null)

    return (
        <article ref={scrollRef} className={classes.infos}>
            <motion.div
                className={classes.image}
                initial={{ x: '-100%' }}
                whileInView={{ x: '0%' }}
                viewport={{ root: scrollRef }}
            >About me</motion.div>
            <div className={classes.curriculum}></div>
        </article>
    );
}

export default Infos;