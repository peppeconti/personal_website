import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import classes from './AnimatedRouter.module.scss';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contatcs/Contacts";
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <div className={classes.animated}>
            <AnimatePresence initial={true} mode={'wait'}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/portfolio' element={<Portfolio />}></Route>
                    <Route path='/contact' element={<Contacts />}></Route>
                    <Route path='*' element={<Navigate replace to='/' />}></Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default AnimatedRoutes;
