import classes from "./Header.module.scss";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {

  const setHeight = {
    minHeight: `${window.innerHeight}px`
  };

  return (
    <header style={setHeight} className={classes.header}>
      <Hero />
      <Nav />
    </header>
  );
};

export default Header;
