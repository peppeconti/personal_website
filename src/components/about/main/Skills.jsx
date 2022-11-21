import classes from './Skills.module.scss';
import js__logo from '../../../assets/javascript.svg';
import react__logo from '../../../assets/react.svg';
import mongodb__logo from '../../../assets/mongodb.svg';
import angular__logo from '../../../assets/angular.svg';

const Skills = () => {

    return (
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
    );
}

export default Skills;