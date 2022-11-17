import './Text.css';

const Text = ({first, second, third}) => {

    return (
        <div className="text">
            <p><span>{first}</span></p>
            <p><span>{second}</span></p>
            <p><span>{third}</span></p>
        </div>
    );
}

export default Text;