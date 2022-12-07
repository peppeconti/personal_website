import classes from './Home.module.scss';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

const Home = () => {

  return (
    <header className={classes.home}>
      <Nav />
      <Main />
      <Footer />
    </header>
  );
}

export default Home;