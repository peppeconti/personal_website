import classes from "./Buttons.module.scss";
import { useRef, useEffect } from "react";

const Buttons = ({ more, less, setArrayItems, arrayItems }) => {
  const a = useRef(0);
  const b = useRef(0);

  useEffect(() => {
    a.current = document.body.clientHeight;
    if (b.current) {
      window.scrollBy({
        top: a.current - b.current,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [arrayItems]);

  const changeNum = (n) => {
    b.current = document.body.clientHeight;
    setArrayItems((prev) => (prev += n));
  };

  return (
    <div className={classes.buttons}>
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
