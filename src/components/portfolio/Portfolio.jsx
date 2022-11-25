import classes from './Portfolio.module.scss';
import { motion as m } from 'framer-motion';
import Nav2 from '../../nav_2/Nav2';

const Portfolio = () => {

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
    <m.section className={classes.portfolio} variants={exitPage} initial='hidden' animate='visible' exit='exit'>
      <Nav2 text='Portfolio' />
    </m.section>
  );
}

export default Portfolio;
