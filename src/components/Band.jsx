import './Band.css';

const Band = ({ gradient, start, end }) => {

    const style = {
        background: `linear-gradient(${gradient})`,
        gridRowStart: `${start}`,
        gridRowEnd: `${end}`
    }

    return (
        <div className="band" style={style}></div>
    );
}

export default Band;