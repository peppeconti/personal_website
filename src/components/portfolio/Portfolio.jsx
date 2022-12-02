// import { useState } from 'react';
import classes from './Portfolio.module.scss';
import { motion as m } from 'framer-motion';
import Nav from '../../nav/Nav';
import ProjectImg from './main/ProjectImg';
import Projects from './main/Projects';
import { data } from '../../utils/projects_data';
import ProjectInfo from './main/ProjectInfo';

const Portfolio = () => {

  // const [activeProject, setProject] = useState(data[0]);

  const exitPage = {
    hidden: {
      opacity: 1,
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
      <main className={classes.main}>
        <Projects data={data} />
        <ProjectInfo />
      </main>
    </m.section>
  );
}

export default Portfolio;


//<ProjectInfo description={activeProject.description} />-->
