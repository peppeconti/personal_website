import classes from './Credits.module.scss';
import { data as social } from '../../utils/social';
import Social from './Social';

const Credits = () => {

    const fullYear = new Date().getFullYear();

    return (
        <div className={classes.credits}>
            <h4 className={classes.copyright}>&#169; <time>{fullYear}</time> Copyright Giuseppe Conti</h4>
            <ul className={classes.social}>
                {social.map(e => <Social key={e.id} name={e.name} logo={e.logo} url={e.url}/>)}
            </ul>
        </div>
    );
}

export default Credits;