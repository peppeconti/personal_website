import classes from './Header.module.scss';
import home from '../../../assets/home.svg';
import Nav from '../../../nav/Nav';
import LinkIcon from '../../../nav/LinkIcon';

const Header = () => {

    return (
        <header className={classes.header}>
            <Nav />
            <h1><span>About me</span></h1>
            <div className={classes.home__icon}><LinkIcon href={'/'} source={home} alt="home" isRoute /></div>
        </header>
    );
}

export default Header;