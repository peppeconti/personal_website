import classes from './Contact.module.scss';

const Contact = () => {

    return (
        <li className={classes.contact}>
            <div className={classes.left}/>
            <div className={classes.right}/>
            <p><span>C</span>ontact</p>
        </li>
    );
}

export default Contact;