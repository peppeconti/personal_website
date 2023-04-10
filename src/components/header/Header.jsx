import { useLayoutEffect, useRef } from "react";
import classes from "./Header.module.scss";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  const header = useRef();
 
  useLayoutEffect(() => {

    header.current.style.minHeight = window.innerHeight + "px";

    window.addEventListener('resize', () => {
      header.current.style.minHeight = window.innerHeight + "px";
    });
    
  }, []);

  return (
    <header ref={header} className={classes.header}>
      <Hero />
      <Nav />
    </header>
  );
};

export default Header;
