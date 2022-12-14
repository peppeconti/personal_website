import classes from './About.module.scss';
import Infos from './Infos';
// import Skills from './Skills';

const About = () => {

    return (
        <section id='about' className={classes.about}>
            <Infos />
        </section>
    );
}

export default About;