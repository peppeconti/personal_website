import './Band.css';

const Band = ({ gradient, start, end, text }) => {

    const style = {
        background: `linear-gradient(${gradient})`,
        gridRowStart: `${start}`,
        gridRowEnd: `${end}`
    }

    return (
        <div className="band" style={style}>
            <p className="text"><span>{text}</span></p>
        </div>
    );
}

export default Band;