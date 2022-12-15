import classes from './App.module.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Showroom from './components/showroom/Showroom';

function App() {

  return (
    <div className={classes.App}>
      <Header />
      <About />
      <Showroom />
    </div>
  );
}

export default App;
