import classes from './Projects.module.scss';
import ProjectImg from './ProjectImg';

const Projects = ({ data, activeProject, setProject }) => {

    return (
        <div className={classes.projects}>
            {data.map((project, index) => <ProjectImg
                key={project.id}
                id={project.id}
                index={index}
                img={project.img}
                name={project.name}
                project={activeProject}
                setProject={setProject}
                data={data}
            />)}
        </div>
    );
}

export default Projects;