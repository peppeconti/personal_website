import classes from './Social.module.scss';

const Social = ({name, logo, url}) => {

    return (
        <li className={classes.social}>
            <a href={url} target='_blank' rel="noreferrer">
                <img src={logo} alt={name}/>
            </a>
        </li>
    );
}

export default Social;