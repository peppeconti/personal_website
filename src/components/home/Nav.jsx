import classes from './Nav.module.scss';
import AboutButton from './AboutButton';
import Showroom from './Showroom';

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <AboutButton />
                <Showroom />
                <AboutButton />
            </ul>
        </nav>
    );
}

export default Nav;