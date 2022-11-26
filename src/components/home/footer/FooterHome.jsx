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
  }

  return (
    <nav className={classes.footer__home}>
      <m.ul variants={footerAnimation} initial='hidden' animate='visible'>
        <Link href={'https://www.linkedin.com/in/giuseppe-conti-4a806b16/'} source={linkedin} alt="linkedin"/>
        <Link href={'https://github.com/peppeconti'} source={github} alt="github"/>
        <Link source={codewars} alt="codewars"/>
      </m.ul>
    </nav>
  );
}

export default FooterHeader;