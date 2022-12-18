import classes from './Credits.module.scss';
import { data as social } from '../../utils/social';

const Credits = () => {

    const fullYear = new Date().getFullYear();

    return (
        <div className={classes.credits}>
            <h4 className={classes.copyright}>&#169; <time>{fullYear}</time> Copyright Giuseppe Conti</h4>
            <ul className={classes.social}></ul>
        </div>
    );
}

export default Credits;