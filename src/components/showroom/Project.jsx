import { useRef } from 'react';
import classes from './Project.module.scss';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import github from '../../assets/github__repository.svg';

const Project = ({ title, subtitle, logo, description, url, repository, keywords }) => {

    const scrollRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', '200% 100%']
    });

    const openRight = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '0%'] // [-50%, 0%]
    )

    const openLeft = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '0%'] // [50%, 0%]
    )


    return (
        <article ref={scrollRef} className={classes.project}>
            <div className={classes.extension} />
            <m.div style={{ x: openLeft }} viewport={{ root: scrollRef }} className={classes.description}>
                <figure className={classes.repository}>
                    <a href={repository} target='_blank' rel='noreferrer'>
                        <img src={github} alt='github repository' />
                    </a>
                </figure>
                <p>{description}</p>
            </m.div>
            <m.div style={{ x: openRight }} viewport={{ root: scrollRef }} className={classes.name}>
                <figure>
                    <img src={logo} alt='project logo' />
                </figure>
                <div className={classes.title}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>
            </m.div>
        </article>
    );
}

export default Project;