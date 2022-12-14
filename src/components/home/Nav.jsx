import classes from './Nav.module.scss';
import Link from './Link';
// import AboutButton from './AboutButton';
//import Showroom from './Showroom';
//import Contact from './Contact';

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <Link text='About me' target='#about' />
                <Link text='Showroom' target='#showroom' />
                <Link text='Contact' target='#contact' />
            </ul>
        </nav>
    );
}

export default Nav;