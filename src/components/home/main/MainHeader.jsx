import classes from './MainHeader.module.scss';
import Band from './Band';
import Maze from './Maze';
import { motion as m } from 'framer-motion';

const MainHeader = () => {

  const mainAnimation = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: .3,
        duration: 0,
        when: 'beforeChildren',
        staggerChildren: .3,
        staggerDirection: -1,
        delayChildren: .5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: .3,
        delayChildren: .15
      }
    }
  }

  return (
    <div className={classes.main__home}>
      <Maze />
      <m.div className={classes.wrapper} variants={mainAnimation} initial='hidden' animate='visible' exit='exit'>
        <Band text="Giuseppe Conti" start="1" end="2" gradient="270deg, #FF005C 0%, rgba(255, 0, 92, 0) 86.39%" />
        <Band text="Webdeveloper" start="2" end="3" gradient="270deg, #61DAFB 0%, rgba(60, 220, 183, 0) 88.33%" />
        <Band text="Milan" start="3" end="4" gradient="270deg, #F7DF1E 0%, rgba(15, 15, 15, 0) 85.83%" />
      </m.div>
    </div>
  );
}

export default MainHeader;