import classes from './Nav.module.scss';
import Link from './Link';
import { motion as m } from 'framer-motion';

const Nav = () => {

    const opening = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: .6,
                delayChildren: .3
            }
        }
    }

    return (
        <nav className={classes.nav}>
            <m.ul variants={opening} initial='hidden' animate='visible'>
                <Link text='About me' target='#about' />
                <Link text='Showroom' target='#showroom' layout='round' />
                <Link text='Contact' target='#contact' layout='vertical' />
            </m.ul>
        </nav>
    );
}

export default Nav;