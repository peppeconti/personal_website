import classes from './Showroom.module.scss';
import { data as projects } from '../../utils/projects';
import Project from './Project';

const Showroom = () => {

    return (
        <section id='showroom' className={classes.showroom}>
            <div className={classes.projects__wrapper}>
                {projects.map(e => <Project
                    key={e.id}
                    title={e.title}
                    subtitle={e.subtitle}
                    font={e.font}
                    logo={e.logo}
                    description={e.description}
                    keywords={e.keywords}
                    url={e.url}
                    repository={e.repository}
                />)}
            </div>
        </section>
    );
}

export default Showroom;