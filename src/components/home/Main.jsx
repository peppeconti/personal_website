import classes from './Main.module.scss';
import laptop from '../../assets/laptop.svg';

const Main = () => {

  return (
    <main className={classes.main}>
      <div>
        <h1>Giuseppe Conti<br/>Web Developer<br/>Milan</h1>
        <h2>Front End Developer / Milan</h2>
      </div>
      <figure>
        <img src={laptop} alt='laptop' />
      </figure>
    </main>
  );
}

export default Main;