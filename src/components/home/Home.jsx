import classes from './Home.module.scss';
import Nav from '../../nav/Nav';
import MainHome from './main/MainHeader';
import FooterHome from './footer/FooterHome';
import { motion as m } from 'framer-motion';

const Home = () => {

  return (
    <m.section className={classes.home}>
      <Nav />
      <MainHome />
      <FooterHome />
    </m.section>
  );
}

export default Home;







/*const home = useRef();
const tl = useRef();
const tla = useRef();

useLayoutEffect(() => {

  tl.current = gsap.timeline();

  const ctx = gsap.context(() => {
    tl.current
      .set('.nav ul li', { opacity: 0, rotateY: 180 })
      .set('.nav ul li img', { opacity: 0 })
      .to('.band', {
        duration: .6, y: '0', opacity: 1, ease: 'easeOut', stagger: {
          from: "end",
          each: .5
        }
      })
      .to('.text', { duration: .6, opacity: 1, ease: 'easeOut', stagger: .5 })
      .to('.nav ul li', {
        duration: .6, opacity: 1, rotateY: 0, onStart: () => {
          tla.current = gsap.timeline().to('.nav ul li img', { delay: .25, duration: 0, opacity: 1, ease: 'easeOut', stagger: .5 });
        }, ease: 'easeOut', stagger: .5
      }, "-=.6")
      .to('.footer__header ul li', {
        duration: .6, opacity: 1, rotateY: 0, onStart: () => {
          tla.current = gsap.timeline().to('.footer__header ul li img', {
            delay: .25, duration: 0, opacity: 1, ease: 'easeOut', stagger: {
              from: "end",
              each: .5
            }
          });
        }, ease: 'easeOut', stagger: {
          from: "end",
          each: .5
        }
      }, "-=.6")
  }, home);

  return () => ctx.revert();

}, []);*/