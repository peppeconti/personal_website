import classes from './Nav.module.scss';

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <a href='#about'><li><span>a</span>bout</li></a>
                <a href='#work'><li><span>w</span>ork</li></a>
                <a href='#contact'><li><span>c</span>ontact</li></a>
            </ul>
        </nav>
    );
}

export default Nav;