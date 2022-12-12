import classes from './Home.module.scss';
import Hero from './Hero';
import Nav from './Nav';

const Home = () => {

  return (
    <header className={classes.home}>
      <Hero />
      <Nav />
    </header>
  );
}

export default Home;