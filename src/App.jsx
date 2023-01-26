import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import classes from './App.module.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Showroom from './components/showroom/Showroom';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    smoothscroll.polyfill();
  }, []);

  return (
    <div className={classes.App}>
      <Header />
      <About />
      <Showroom />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
