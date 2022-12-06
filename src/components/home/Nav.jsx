import classes from './Nav.module.scss';

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <li><span>a</span>bout</li>
                <li><span>w</span>ork</li>
                <li><span>c</span>ontact</li>
            </ul>
        </nav>
    );
}

export default Nav;