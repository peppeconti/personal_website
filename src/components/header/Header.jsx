import classes from './Header.module.scss';
import Hero from './Hero';
import Nav from './Nav';

const Header = () => {

  return (
    <header className={classes.header}>
      <Hero />
      <Nav />
    </header>
  );
}

export default Header;