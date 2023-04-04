import { useRef } from 'react';
import classes from "./Header.module.scss";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {

  const headerRef = useRef();

  const setHeight = () => {
   headerRef.style.minHeight =
      window.innerHeight + "px";
  };


  let deviceWidth = window.matchMedia("(max-width: 1024px)");

  if (deviceWidth.matches) {

    window.addEventListener("resize", setHeight);

    setHeight();
  }

  return (
    <header ref={headerRef} className={classes.header}>
      <Hero />
      <Nav />
    </header>
  );
};

export default Header;
