import classes from "./Buttons.module.scss";

const Buttons = ({ more, less, setArrayItems }) => {
  
  const changeNum = (n) => {
    setArrayItems((prev) => (prev += n));
    //console.log(projectHeight.clientHeight);
    window.scrollBy({
      top: 200*n,
      left: 0,
      behavior: "smooth",
    });
    
  };

  return (
    <div className={classes.buttons}>
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
