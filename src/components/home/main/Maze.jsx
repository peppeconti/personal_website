import classes from './Maze.module.scss';
import MazeSvg from './MazeSvg';

const Maze = () => {

    return (
        <div className={classes.maze}>
            <figure>
                <MazeSvg />
            </figure>
        </div>
    );
}

export default Maze;