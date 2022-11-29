import React from 'react';
import classes from './ProjectImg.module.scss';

const ProjectImg = ({ id, index, img, name, project, setProject, data }) => {

    const active = {
        opacity: '.5'
    };

    const isActive = project.id === id ? active : undefined; 

    const cc = () => {
        setProject(data[index])
    }

    return (
            <div id={id} className={classes.project} style={isActive} onClick={cc}>
                <img src={img} alt={name} />
            </div>
    );
}

export default ProjectImg;