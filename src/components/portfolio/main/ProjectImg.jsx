import React from 'react';
import classes from './ProjectImg.module.scss';

const ProjectImg = ({ id, img, name }) => {

    return (
        <div id={id} className={classes.project}>
            <figure>
                <img src={img} alt={name} />
            </figure>
        </div>
    );
}

export default ProjectImg;

/*<img src={img} alt={name} />*/