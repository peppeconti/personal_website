import React from 'react';
import classes from './ProjectImg.module.scss';

const ProjectImg = ({ id, index, img, name }) => {

    /*const active = {
        opacity: '.5'
    };

    const isActive = project.id === id ? active : undefined; 

    const cc = () => {
        setProject(data[index])
    }*/

    return (
        <div id={id} className={classes.project}>
            <img src={img} alt={name} />
        </div>
    );
}

export default ProjectImg;

/*<img src={img} alt={name} />*/