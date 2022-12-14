import classes from './SingleSkill.module.scss';

const SingleSkill = ({ name, percentage }) => {

    const size = {
        width: percentage
    }

    return (
        <div className={classes.skill}>
            <h3>{name}</h3>
            <div className={classes.bar}>
                <div className={classes.filling} style={size} />
            </div>
        </div>
    );
}

export default SingleSkill;