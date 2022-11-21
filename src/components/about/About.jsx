import classes from './About.module.scss';
import home from '../../assets/home.svg';
import Nav from '../../nav/Nav';
import LinkIcon from '../../nav/LinkIcon';
import { motion as m } from 'framer-motion';
import Biographic from './main/Biographic';
import Skills from './main/Skills';

const About = () => {

  return (
    <m.section className={classes.about} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
      <Nav />
      <h1><span>About me</span></h1>
      <div className={classes.home__icon}><LinkIcon href={'/'} source={home} alt="home" isRoute /></div>
      <Biographic />
      <Skills />
    </m.section>
  );
}

export default About;
