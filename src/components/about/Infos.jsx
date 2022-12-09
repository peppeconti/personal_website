import classes from './Infos.module.scss';

const Infos = () => {

    return (
        <article className={classes.infos}>
           <div className={classes.image}></div>
           <div className={classes.curriculum}></div>
        </article>
    );
}

export default Infos;