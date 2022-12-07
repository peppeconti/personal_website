import classes from './Figure.module.scss';

const Figure = ({image}) => {

    return (
        <figure className={classes.laptop}>
            <img src={image} alt='laptop' />
        </figure>
    );
}

export default Figure;