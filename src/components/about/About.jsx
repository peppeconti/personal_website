import classes from './About.module.scss';
import home from '../../assets/home.svg';
import Nav from '../../nav/Nav';
import LinkIcon from '../../nav/LinkIcon';
import MainAbout from './main/MainAbout';

const About = () => {

  return (
    <section className={classes.about}>
      <Nav />
      <h1><span>About me</span></h1>
      <div className={classes.home__icon}><LinkIcon href={'/'} source={home} alt="home" isRoute/></div>
    </section>
  );
}

export default About;
