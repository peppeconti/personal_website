import classes from './MainAbout.module.scss';
import Biographic from './Biographic';

const MainAbout = () => {

    return (
        <div className={classes.main__about}>
            <h1>About me</h1>
            <div className={classes.flex}>
                <aside className={classes.img__profile}>
                    cioa
                </aside>
                <Biographic />
            </div>
        </div>
    );
}

export default MainAbout;