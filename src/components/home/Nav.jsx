import classes from './Nav.module.scss';
import AboutButton from './AboutButton';

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <AboutButton/>
                <AboutButton/>
                <AboutButton/>
            </ul>
        </nav>
    );
}

export default Nav;