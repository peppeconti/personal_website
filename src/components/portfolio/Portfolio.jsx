import classes from './Portfolio.module.scss';
import { motion as m } from 'framer-motion';
import Nav2 from '../../nav_2/Nav2';

const Portfolio = () => {

  return (
    <m.section className={classes.portfolio} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
        <Nav2 text="Portfolio"/>
    </m.section>
  );
}

export default Portfolio;
