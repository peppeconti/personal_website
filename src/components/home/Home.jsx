import classes from './Home.module.scss';
import Nav from './Nav';
import Main from './Main';

const Home = () => {

  return (
    <header className={classes.home}>
      <Nav />
      <Main />
    </header>
  );
}

export default Home;