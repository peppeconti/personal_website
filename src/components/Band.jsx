import './Band.css';

const Band = ({ text, gradient }) => {

    const style = {
        background: `linear-gradient(${gradient})`
    }

    return (
        <div className="band" style={style}>
            <p class="text"><span>{text}</span></p>
        </div>
    );
}

export default Band;