import classes from './App.module.scss';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {

  return (
    <div className={classes.App}>
      <Home />
      <About />
    </div>
  );
}

export default App;
