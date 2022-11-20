import classes from './MainAbout.module.scss';

const MainAbout = () => {

  return (
    <div className={classes.main__about}>
        <h1>About me</h1>
        <aside className={classes.img__profile}></aside>
        <div className={classes.introduction}></div>
    </div>
  );
}

export default MainAbout;