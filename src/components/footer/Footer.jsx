import classes from './Footer.module.scss';
import Credits from './Credits';

const Footer = () => {

    return (
        <footer className={classes.footer}>
            <Credits />
        </footer>
    );
}

export default Footer;