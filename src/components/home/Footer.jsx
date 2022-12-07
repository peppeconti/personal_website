import classes from './Footer.module.scss';
import linkedin from '../../assets/linkedin-in.svg';
import github from '../../assets/github.svg';
import codewars from '../../assets/cib-codewars.svg';

const Footer = () => {

    return (
        <footer className={classes.footer}>
            <ul className={classes.social}>
                <a href='https://www.linkedin.com/in/giuseppe-conti-4a806b16/' target='_blank' rel='noreferrer'><li><img src={linkedin} alt='linkedin'/></li></a>
                <a href='https://github.com/peppeconti' target='_blank' rel='noreferrer'><li><img src={github} alt='github'/></li></a>
                <a href='https://www.codewars.com/users/Syphante' target='_blank' rel='noreferrer'><li><img src={codewars} alt='codewars'/></li></a>
            </ul>
        </footer>
    );
}

export default Footer;