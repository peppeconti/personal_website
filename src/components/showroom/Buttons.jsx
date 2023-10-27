import classes from "./Buttons.module.scss";
import { useRef, useEffect } from "react";

const Buttons = ({ more, less, setArrayItems, arrayItems }) => {
  const buttons = useRef(null);
  const scroll = useRef(false);

  useEffect(() => {
    if (scroll.current)
      window.scrollTo({
        top:
          buttons.current.offsetTop +
          buttons.current.clientHeight / 2 -
          window.innerHeight / 2,
        left: 0,
        behavior: "smooth",
      });
      scroll.current = false;
  }, [arrayItems]);

  const changeNum = (n) => {
    scroll.current = true;
    setArrayItems((prev) => (prev += n));
  };

  return (
    <div className={classes.buttons} ref={buttons}>
      {more && (
        <button type="button" onClick={() => changeNum(3)}>
          More
        </button>
      )}
      {less && (
        <button type="button" onClick={() => changeNum(-3)}>
          Less
        </button>
      )}
    </div>
  );
};

export default Buttons;
