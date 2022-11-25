import classes from "./LinkIcon.module.scss";
import { NavLink } from "react-router-dom";
import { motion as m } from 'framer-motion';

const LinkIcon = ({ source, alt, href, isRoute, left }) => {

  const styles = {
    marginLeft: left ? 'auto' : 'unset',
  }
  const appear = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0,
      }
    },
  }

  const rotate = {
    hidden: {
      opacity: 0, rotateY: 180
    },
    visible: {
      opacity: 1, rotateY: 0,
      transition: {
        duration: .6,
        delayChildren: .3
      }
    },
  }

  if (isRoute) {
    return (
      <NavLink
        style={styles}
        to={href}
        className={({ isActive }) =>
          isActive ? classes.active : undefined
        }
      >
        <m.li className={classes.link} variants={rotate} whileHover={{ scale: 1.2, transition: { duration: .2 }, }}>
          <m.img src={source} alt={alt} variants={appear} />
        </m.li>
      </NavLink>
    );
  } else {
    return (
      <a href={href} target='_blank' rel="noreferrer">
         <m.li className={classes.link} variants={rotate} whileHover={{ scale: 1.2, transition: { duration: .2 }, }}>
          <m.img src={source} alt={alt} variants={appear} />
        </m.li>
      </a>
    );
  }

}

export default LinkIcon;