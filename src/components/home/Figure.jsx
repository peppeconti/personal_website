import classes from './Figure.module.scss';
import laptop from '../../assets/laptop.svg';

const Figure = () => {

    return (
        <figure className={classes.laptop}>
            <img src={laptop} alt='laptop' />
        </figure>
    );
}

export default Figure;