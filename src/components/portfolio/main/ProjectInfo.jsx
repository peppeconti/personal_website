import React from 'react';
import classes from './ProjectInfo.module.scss';
import { motion as m } from 'framer-motion';

const ProjectInfo = ({ description }) => {

    const dropIn = {
        hidden: {
            x: '100vw',
        },
        visible: {
            x: '-50px',
            transition: {
                duration: 0.3,
                type: 'spring',
                damping: 25,
                stiffness: 500,
            },
        }
    };

    return (
        <m.div className={classes.info} variants={dropIn} initial='hidden' animate='visible' >
            {description}
        </m.div>
    );
}

export default ProjectInfo;