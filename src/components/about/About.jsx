import './About.css';
import Nav from '../home/nav/Nav';
import MainAbout from './main/MainAbout';

const About = () => {
  return (
    <section className="about">
      <Nav />
      <MainAbout />
    </section>
  );
}

export default About;