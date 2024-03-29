import classes from './SingleSkill.module.scss';
import { motion as m } from 'framer-motion';

const SingleSkill = ({ name, percentage }) => {

    const fillingAnimation = {
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
            <h3 className={classes.name}>{name}</h3>
            <div className={classes.bar}>
                <m.div
                    className={classes.filling}
                    variants={fillingAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    data-percentage={percentage}
                />
            </div>
        </div>
    );
}

export default SingleSkill;