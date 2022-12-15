import classes from './Showroom.module.scss';
import { data as projects } from '../../utils/projects';
import Project from './Project';

const Showroom = () => {

    return (
        <section id='showroom' className={classes.showroom}>
            {projects.map(e => <Project
                key={e.id}
                title={e.title}
                subtitle={e.subtitle}
                logo={e.logo}
                description={e.description}
                keywords={e.keywords}
                url={e.url}
                repository={e.repository}
            />)}
        </section>
    );
}

export default Showroom;