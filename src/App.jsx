import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/portfolio' element={<Portfolio />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<Navigate replace to='/' />}></Route>
    </Routes>
  );
}

export default App;
