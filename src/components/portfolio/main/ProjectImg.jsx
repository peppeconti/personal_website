import React from 'react';
import classes from './ProjectImg.module.scss';
import { data } from '../../../utils/projects_data';

const ProjectImg = ({ id, index, img, name, setProject, activeProject }) => {

    const active = {
        opacity: '.5'
    };

    const isActive = activeProject.id === id ? active : undefined; 

    const cc = () => {
        console.log(data);
        console.log(index);
        setProject(data[index])
    }

    return (
        <div id={id} className={classes.project} style={isActive} onClick={cc}>
            <figure>
                <img src={img} alt={name} />
            </figure>
        </div>
    );
}

export default ProjectImg;

/*<img src={img} alt={name} />*/