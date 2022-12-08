import classes from './Home.module.scss';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import MenuButton from './MenuButton';

const Home = () => {

  return (
    <header className={classes.home}>
      <MenuButton />
      <Nav />
      <Main />
      <Footer />
    </header>
  );
}

export default Home;