import { useRef } from 'react';
import classes from './Project.module.scss';
import { motion as m, useScroll, useTransform } from 'framer-motion';

const Project = ({ name, description, url }) => {

    const scrollRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', '200% 100%']
    });

    const openRight = useTransform(
        scrollYProgress,
        [0, 1],
        ['-50%', '0%']
    )

    const openLeft = useTransform(
        scrollYProgress,
        [0, 1],
        ['50%', '0%']
    )


    return (
        <article ref={scrollRef} className={classes.project}>
            <div className={classes.extension} />
            <m.div style={{ x: openLeft }} viewport={{ root: scrollRef }} className={classes.description}>
                <p>{description}</p>
            </m.div>
            <m.div style={{ x: openRight }} viewport={{ root: scrollRef }} className={classes.name}>
                <h3>{name}</h3>
            </m.div>
        </article>
    );
}

export default Project;