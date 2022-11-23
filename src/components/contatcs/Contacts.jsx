import classes from './Contacts.module.scss';
import { motion as m } from 'framer-motion';
import Nav2 from '../../nav_2/Nav2';

const Contacts = () => {

  return (
    <m.section className={classes.contacts} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
        <Nav2 text="Contacts"/>
    </m.section>
  );
}

export default Contacts;
