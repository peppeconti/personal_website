import classes from './About.module.scss';
import Nav from '../../nav/Nav';
import MainAbout from './main/MainAbout';

const About = () => {

  return (
    <section className={classes.about}>
        <Nav/>
        <MainAbout/>
    </section>
  );
}

export default About;
