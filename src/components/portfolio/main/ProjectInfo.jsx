import React from 'react';
import classes from './ProjectInfo.module.scss';
import { motion as m } from 'framer-motion';

const ProjectInfo = ({ description }) => {

    const dropIn = {
        hidden: {
            x: '100vw',
        },
        visible: {
            x: '0',
            transition: {
                duration: .3,
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