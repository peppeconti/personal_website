import classes from './Nav.module.scss';
import AboutButton from './AboutButton';
import Showroom from './Showroom';
import Contact from './Contact';

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <AboutButton />
                <Showroom />
                <Contact />
            </ul>
        </nav>
    );
}

export default Nav;