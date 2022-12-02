import React from 'react';
import classes from './ProjectInfo.module.scss';
import { motion as m, AnimatePresence } from 'framer-motion';

const ProjectInfo = ({ description }) => {

    const dropIn = {
        hidden: {
            x: '-100vw',
        },
        visible: {
            x: '0',
            transition: {
                duration: 2,
            },
        },
        exit: {
            x: '100vw'
        }
    };

    return (
        <AnimatePresence>
            <m.div key={description} className={classes.info} variants={dropIn} initial='hidden' animate='visible' exit='exit' >
                {description}
            </m.div>
        </AnimatePresence>
    );
}

export default ProjectInfo;