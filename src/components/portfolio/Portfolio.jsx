import classes from './Portfolio.module.scss';
import { motion as m } from 'framer-motion';
import Nav from '../../nav/Nav';

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
      <Nav text='Portfolio' />
    </m.section>
  );
}

export default Portfolio;
