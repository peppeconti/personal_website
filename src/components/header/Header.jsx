import React, { useRef } from "react";
import classes from "./Header.module.scss";
import { useAppHeight } from "../../hooks/useAppHeight";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
 
  const header = useRef();
  useAppHeight(header);

  return (
    <header ref={header} className={classes.header}>
      <Hero />
      <Nav />
    </header>
  );
};

export default Header;
