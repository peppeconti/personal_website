import classes from './Motto.module.scss';

const Motto = ({firstLine, secondLine, thirdLine, small}) => {

    return (
        <div className={classes.main}>
            <div className={classes.col}>
                <h1 className={classes.motto}>
                    <span className={classes.line}>{firstLine}</span>
                    <span className={classes.line}>{secondLine}</span>
                    <span className={classes.line}>{thirdLine}</span>
                </h1>
                <h2 className={classes.small}>{small}</h2>
            </div>
        </div>
    );
}

export default Motto;