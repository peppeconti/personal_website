import classes from './MainHeader.module.scss';
import Band from './Band';
import Maze from './Maze';
import { motion as m } from 'framer-motion';

const MainHeader = ({order}) => {

  const bandAnimation = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        when: 'beforeChildren',
        delay: order*1
      } 
    },

  }

  return (
    <m.div className={classes.main__home} variants={bandAnimation}>
      <Maze />
      <div className={classes.wrapper}>
        <Band order={2} text="Giuseppe Conti" start="1" end="2" gradient="270deg, #FF005C 0%, rgba(255, 0, 92, 0) 86.39%" />
        <Band order={1} text="Webdeveloper" start="2" end="3" gradient="270deg, #61DAFB 0%, rgba(60, 220, 183, 0) 88.33%" />
        <Band order={0} text="Milan" start="3" end="4" gradient="270deg, #F7DF1E 0%, rgba(15, 15, 15, 0) 85.83%" />
      </div>
    </m.div>
  );
}

export default MainHeader;