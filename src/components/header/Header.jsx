import { useLayoutEffect, useRef } from 'react';
import './Header.css';
import MainHeader from './main/MainHeader';
import Nav from './nav/Nav';
import FooterHeader from './footer/FooterHeader';
import { gsap } from 'gsap';

const Header = () => {


  const header = useRef();
  const tl = useRef();

  useLayoutEffect(() => {

    tl.current = gsap.timeline()

    const ctx = gsap.context(() => {
      tl.current
        .to('.band', {
          duration: .6, y: '0', opacity: 1, ease: 'easeOut', stagger: {
            from: "end",
            each: .5
          }
        })
        .to('.text', { duration: .6, y: '0', opacity: 1, ease: 'easeOut', stagger: .5 })
    }, header);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={header} className="header">
      <Nav />
      <MainHeader />
      <FooterHeader />
    </section>
  );
}

export default Header;