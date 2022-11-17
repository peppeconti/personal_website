import './Maze.css';
import maze from '../assets/maze.svg';

const Maze = () => {

    return (
        <figure className="maze">
            <img src={maze} alt="maze" />
        </figure>
    );
}

export default Maze;