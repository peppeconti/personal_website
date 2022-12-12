import classes from './Showroom.module.scss';

const Showroom = () => {

    return (
        <li className={classes.showroom}>
            <div className={classes.left}/>
            <div className={classes.right}/>
            <p><span>S</span>howroom</p>
        </li>
    );
}

export default Showroom;