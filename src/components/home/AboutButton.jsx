import classes from './AboutButton.module.scss';

const AboutButton = () => {

    return (
        <li className={classes.about}>
            <div className={classes.left}/>
            <div className={classes.right}/>
            <p><span>A</span>bout me</p>
        </li>
    );
}

export default AboutButton;