import classes from './About.module.scss';
import { motion as m } from 'framer-motion';
import Header from './main/Header';
import Biographic from './main/Biographic';
import ImgProfile from './main/ImgProfile'

const About = () => {

  return (
    <m.section className={classes.about} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
      <Header />
      <Biographic />
      <ImgProfile />
    </m.section>
  );
}

export default About;
