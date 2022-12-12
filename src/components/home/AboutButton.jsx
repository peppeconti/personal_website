import classes from './AboutButton.module.scss';

const AboutButton = () => {

    return (
        <li className={classes.about}>
            <span className={classes.left}></span>
            <span className={classes.right}></span>
            <p>About</p>
        </li>
    );
}

export default AboutButton;