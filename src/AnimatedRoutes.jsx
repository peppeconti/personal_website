import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import classes from './AnimatedRouter.module.scss';
import Nav from './nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <div className={classes.animated}>
            <AnimatePresence initial={false} mode={'wait'}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='*' element={<Navigate replace to='/' />}></Route>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default AnimatedRoutes;
