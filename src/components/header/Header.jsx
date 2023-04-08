import { useEffect, useRef } from "react";
import classes from "./Header.module.scss";
//import { useAppHeight } from "../../hooks/useAppHeight";
import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  const header = useRef();
  /*const [resized, setResized] = useState(false);*/

  //let deviceWidth = window.matchMedia("(max-width: 1024px)");

  useEffect(() => {

    header.current.style.minHeight = window.innerHeight + "px";

    window.addEventListener('resize', () => {
      header.current.style.minHeight = window.innerHeight + "px";
    })
  }, []);

  return (
    <header ref={header} className={classes.header}>
      <Hero />
      <Nav />
    </header>
  );
};

export default Header;
