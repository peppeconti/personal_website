import classes from './Maze.module.scss';
import maze from '../../../assets/maze2.svg';

const Maze = () => {

    return (
        <div className={classes.maze}>
            <figure>
                <img src={maze} alt='maze'/>
            </figure>
        </div>
    );
}

export default Maze;