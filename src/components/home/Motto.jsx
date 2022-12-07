import classes from './Motto.module.scss';

const Motto = () => {

    return (
        <div className={classes.main}>
            <div className={classes.wrapper}>
                <h1 className={classes.motto}>
                    <span className={classes.line}>Giuseppe Conti</span>
                    <span className={classes.line}>Web Developer</span>
                    <span className={classes.line}>Milan</span>
                </h1>
                <h2 className={classes.small}>Front End Developer / Milan</h2>
            </div>
        </div>
    );
}

export default Motto;