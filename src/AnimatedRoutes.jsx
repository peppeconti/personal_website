import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();

    const styles = {
        backgroundColor: '#15263f'
    }

    return (
        <div style={styles}>
            <AnimatePresence initial={false} mode={'wait'}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/portfolio' element={<Portfolio />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='*' element={<Navigate replace to='/' />}></Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default AnimatedRoutes;
