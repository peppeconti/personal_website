import classes from './Biographic.module.scss';
import js__logo from '../../../assets/javascript.svg';
import react__logo from '../../../assets/react.svg';
import mongodb__logo from '../../../assets/mongodb.svg';
import angular__logo from '../../../assets/angular.svg';

const Biographic = () => {

    return (
        <article className={classes.bio}>
            <h2 className={classes.skills}><span>Skills</span></h2>
            <div className={classes.logos}>
                <ul>
                    <li>
                        <img src={js__logo} alt="javascript logo"/>
                    </li>
                    <li>
                        <img src={react__logo} alt="react logo"/>
                    </li>
                    <li>
                        <img src={mongodb__logo} alt="mongodb logo"/>
                    </li>
                    <li>
                        <img src={angular__logo} alt="angular logo"/>
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default Biographic;