import './Band.css';

const Band = ({ gradient, start, end, text, cl }) => {

    const style = {
        background: `linear-gradient(${gradient})`,
        gridRowStart: `${start}`,
        gridRowEnd: `${end}`
    }

    return (
        <div className={`band ${cl}`} style={style}>
            <p className="text"><span>{text}</span></p>
        </div>
    );
}

export default Band;