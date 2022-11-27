import classes from './Maze.module.scss';
import maze from '../../../assets/maze2.svg';
import { motion as m } from 'framer-motion';

const Maze = () => {

    const mazeAnimation = {
        hidden: {
            x: '-100vh',
            rotateY: 270
        },
        visible: {
            x: '0',
            rotateY: 0,
            transition: {
                delay: .5,
                duration: .8,
            }
        },
        exit: {
            scale: 0,
            transition: {
                delay: 1
            }
        }
    }


    return (
        <m.div className={classes.maze} variants={mazeAnimation} initial='hidden' animate='visible' exit='exit'>
            <figure>
                <img src={maze} alt='maze' />
            </figure>
        </m.div>
    );
}

export default Maze;