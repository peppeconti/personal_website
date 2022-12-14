import classes from './SingleSkill.module.scss';
import { motion as m } from 'framer-motion';

const SingleSkill = ({ name, percentage }) => {

    const filling = {
        hidden: {
            width: 0
        },
        visible: {
            width: percentage,
            transition: {
                duration: 1.25
            }
        }
    }

    return (
        <div className={classes.skill}>
            <h3>{name}</h3>
            <div className={classes.bar}>
                <m.div
                    className={classes.filling}
                    variants={filling}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
}

export default SingleSkill;