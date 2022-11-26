import classes from './FooterHome.module.scss';
import Link from '../../../nav/LinkIcon';
import linkedin from '../../../assets/linkedin-in.svg';
import github from '../../../assets/github.svg';
import codewars from '../../../assets/cib-codewars.svg';
import {motion as m} from 'framer-motion';

const FooterHeader = () => {

  const footerAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: .6,
        delayChildren: 5.8,
        staggerDirection: -1
      } 
    },
    exit: {
      transition: {
        staggerChildren: .3,
        delayChildren: .3
      } 
    }
  }

  return (
    <nav className={classes.footer__home}>
      <m.ul variants={footerAnimation} initial='hidden' animate='visible' exit='exit'>
        <Link href={'https://www.linkedin.com/in/giuseppe-conti-4a806b16/'} source={linkedin} alt="link to tlinkedin"/>
        <Link href={'https://github.com/peppeconti'} source={github} alt="link to github"/>
        <Link href={'https://www.codewars.com/users/Syphante'} source={codewars} alt="link to codewars"/>
      </m.ul>
    </nav>
  );
}

export default FooterHeader;