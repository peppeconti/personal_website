import classes from './Biographic.module.scss';
import js__logo from '../../../assets/javascript.svg';
import react__logo from '../../../assets/react.svg';
import mongodb__logo from '../../../assets/mongodb.svg';
import angular__logo from '../../../assets/angular.svg';

const Biographic = () => {

    return (
        <article className={classes.bio}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className={classes.logos}>
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
        </article>
    );
}

export default Biographic;