import classes from './Input.module.scss';

const Input = ({ type, name, placeholder }) => {

    const styles = {
        width: '100%',
        height: '10rem',
    }

    const element = type !== 'textarea' ?
        <input className={classes.text} name={name} placeholder={placeholder} /> :
        <textarea style={styles} className={classes.message} name={name} placeholder={placeholder} />


    return (
        <div className={classes.input}>
            <label className={classes.label} htmlFor={name} />
            {element}
        </div>
    );
}

export default Input;