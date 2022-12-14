import classes from './About.module.scss';
import Infos from './Infos';
// import Skills from './Skills';

const About = () => {

    return (
        <section className={classes.about}>
            <Infos />
        </section>
    );
}

export default About;