import classes from './Biographic.module.scss';
import js__logo from '../../../assets/javascript.svg';
import react__logo from '../../../assets/react.svg';
import mongodb__logo from '../../../assets/mongodb.svg';
import angular__logo from '../../../assets/angular.svg';

const Biographic = () => {

    return (
        <article className={classes.bio}>
            <p className={classes.about__me}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className={classes.skills}>
                <h2><span>Skills</span></h2>
                <div className={classes.logos}>
                    <ul>
                        <li>
                            <img src={js__logo} alt="javascript logo" />
                        </li>
                        <li>
                            <img src={react__logo} alt="react logo" />
                        </li>
                        <li>
                            <img src={mongodb__logo} alt="mongodb logo" />
                        </li>
                        <li>
                            <img src={angular__logo} alt="angular logo" />
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    );
}

export default Biographic;


/*

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

*/

/*

 <h2><span>Skills</span></h2>
                <div className={classes.logos}>
                    <ul>
                        <li>
                            <img src={js__logo} alt="javascript logo" />
                        </li>
                        <li>
                            <img src={react__logo} alt="react logo" />
                        </li>
                        <li>
                            <img src={mongodb__logo} alt="mongodb logo" />
                        </li>
                        <li>
                            <img src={angular__logo} alt="angular logo" />
                        </li>
                    </ul>
                </div>

*/ 