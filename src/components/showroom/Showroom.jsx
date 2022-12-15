import classes from './Showroom.module.scss';
import Project from './Project';

const Showroom = () => {

    return (
        <section id='showroom' className={classes.showroom}>
            <Project />
            <Project />
            <Project />
        </section>
    );
}

export default Showroom;