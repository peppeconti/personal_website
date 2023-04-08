import { useEffect, useState } from "react";
import classes from "./Header.module.scss";
//import { useAppHeight } from "../../hooks/useAppHeight";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  //const header = useRef();
  /*const [resized, setResized] = useState(false);*/

  const altezza = `${window.innerHeight}px`;

  /*useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) setResized(prev => !prev)
    })
  }, [resized]);*/

  const alt = {
    height: altezza
  }

  return (
    <header style={alt} className={classes.header}>
      <Hero />
      <Nav />
    </header>
  );
};

export default Header;
