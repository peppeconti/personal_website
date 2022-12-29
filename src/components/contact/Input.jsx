import classes from './Input.module.scss';

const Input = ({ input, type, name, onType, onTouch, value, placeholder }) => {

    const styles = {
        width: '100%',
        height: '10rem',
    }

    const element = input !== 'textarea' ?
        <input type={type} className={classes.text} name={name} placeholder={placeholder} onChange={onType} onBlur={onTouch} value={value} /> :
        <textarea type={type} style={styles} className={classes.message} name={name} placeholder={placeholder} onChange={onType} onBlur={onTouch} value={value} />


    return (
        <div className={classes.input}>
            <label className={classes.label} htmlFor={name} />
            {element}
        </div>
    );
}

export default Input;