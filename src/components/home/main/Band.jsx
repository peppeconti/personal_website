import classes from './Band.module.scss';

const Band = ({ gradient, start, end, text }) => {

    const style = {
        background: `linear-gradient(${gradient})`,
        gridRowStart: `${start}`,
        gridRowEnd: `${end}`
    }

    return (
        <div className={classes.band} style={style}>
            <p className={classes.text}><span>{text}</span></p>
        </div>
    );
}

export default Band;