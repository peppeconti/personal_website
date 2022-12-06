import classes from './Home.module.scss';
import Main from './Main';

const Home = () => {

  return (
    <section className={classes.home}>
      <Main />
    </section>
  );
}

export default Home;