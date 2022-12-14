import classes from './Link.module.scss';
import Left from '../../styled/Left';

const Link = ({ target, text }) => {

    return (
        <a className={classes.anchor} href={target}>
            <li className={classes.link}>
                <Left />
                <p>{text}</p>
            </li>
        </a>
    );
}

export default Link;