import classes from './About.module.scss';
import { motion as m } from 'framer-motion';
import Header from './main/Header';
import Biographic from './main/Biographic';
import ImgProfile from './main/ImgProfile'

const About = () => {

  const exitPage = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        when: 'afterChildren'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
        when: 'afterChildren'
      }
    }
  }

  return (
    <m.section className={classes.about} variants={exitPage} initial='hidden' animate='visible' exit='exit'>
      <Header text="Projects" />
      <Biographic />
      <ImgProfile />
    </m.section>
  );
}

export default About;
