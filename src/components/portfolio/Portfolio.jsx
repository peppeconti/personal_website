import './Portfolio.css';
import Nav from '../home/nav/Nav';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

const Showcase = () => {
  return (
    <m.section className="portfolio" exit={{ opacity: 0 }} transition={{ duration: 2 }}>
      <Nav />
      <h1>Portfolio</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </m.section>
  );
}

export default Showcase;