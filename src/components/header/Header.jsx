import classes from "./Header.module.scss";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  const mobile = useMediaQuery("max-width: 1024px");

  let height;

  if (mobile) {
    height = `${window.innerHeight}px`;
  } else {
    height = "100vh";
  }

  const setHeight = {
    height: height,
  };

  return (
    <header style={setHeight} className={classes.header}>
      <Hero />
      <Nav />
    </header>
  );
};

export default Header;
