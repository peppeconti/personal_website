import classes from './Input.module.scss';

const Input = ({ type, name }) => {

    const element = type === 'input' ?
        <input name={name}></input> :
        <textarea name={name}></textarea>


    return (
        <div className={classes.input}>
            <label htmlFor={name} />
            {element}
        </div>
    );
}

export default Input;