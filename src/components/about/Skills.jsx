import classes from './Skills.module.scss';
import SingleSkill from './SingleSkill';
import { data as skills } from '../../utils/skills';

const Skills = () => {

    return (
        <article className={classes.skills}>
            <h2>Skills</h2>
            <div className={classes.skill__list}>
                {skills.map(e => <SingleSkill key={e.id} name={e.name} percentage={e.percentage} />)}
            </div>
        </article>
    );
}

export default Skills;