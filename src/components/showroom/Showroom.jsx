import classes from './Showroom.module.scss';
import { data as projects } from '../../utils/projects';
import Project from './Project';

const Showroom = () => {

    return (
        <section id='showroom' className={classes.showroom}>
            {projects.map(e => <Project key={e.id} name={e.name} description={e.description} />)}
        </section>
    );
}

export default Showroom;