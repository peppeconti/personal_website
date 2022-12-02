import classes from './Projects.module.scss';
import ProjectImg from './ProjectImg';
import { data } from '../../../utils/projects_data';

const Projects = ({ activeProject, setProject  }) => {

    return (
        <div className={classes.projects}>
            {data.map((project, index) => <ProjectImg
                key={project.id}
                id={project.id}
                index={index}
                img={project.img}
                name={project.name}
                activeProject={activeProject}
                setProject={setProject}
            />)}
        </div>
    );
}

export default Projects;