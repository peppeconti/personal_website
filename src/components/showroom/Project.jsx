import classes from './Project.module.scss';
import { motion as m, useScroll } from 'framer-motion';

const Project = () => {

    return (
        <article className={classes.project}>
            <div className={classes.description} />
            <div className={classes.name} />
        </article>
    );
}

export default Project;