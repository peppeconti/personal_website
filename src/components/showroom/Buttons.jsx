import classes from "./Buttons.module.scss";
import { useRef } from "react";

const Buttons = ({ more, less, setArrayItems }) => {
  const buttonsRef = useRef(null);

  const changeNum = (n) => {
    setArrayItems((prev) => (prev += n));
    window.scrollTo({
      top: buttonsRef.current.offsetBottom,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.buttons} ref={buttonsRef}>
      {more && (
        <button type="button" onClick={() => changeNum(3)}>
          SHOW MORE
        </button>
      )}
      {less && (
        <button type="button" onClick={() => changeNum(-3)}>
          SHOW LESS
        </button>
      )}
    </div>
  );
};

export default Buttons;
