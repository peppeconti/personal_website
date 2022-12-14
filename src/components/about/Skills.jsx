import classes from './Skills.module.scss';
import SingleSkill from './SingleSkill';

const Skills = () => {

    return (
        <article className={classes.skills}>
            <h2>Skills</h2>
            <div className={classes.skill__list}>
                <SingleSkill name='HTML/CSS' percentage='80%' />
                <SingleSkill name='Javascript' percentage='70%' />
                <SingleSkill name='Typescript' percentage='30%' />
                <SingleSkill name='React' percentage='60%' />
                <SingleSkill name='Angular' percentage='40%' />
                <SingleSkill name='MongoDB' percentage='40%' />
                <SingleSkill name='NodeJS' percentage='40%' />
                <SingleSkill name='Figma' percentage='45%' />
            </div>
        </article>
    );
}

export default Skills;