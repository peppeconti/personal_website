import classes from './Social.module.scss';

const Social = ({name, logo, url}) => {

    return (
        <li className={classes.social}>
            <a href={url}>
                <img src={logo}  alt={name}/>
            </a>
        </li>
    );
}

export default Social;