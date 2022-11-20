import './MainAbout.css';
import Biographic from './Biographic';
import ImgProfile from './ImgProfile';

const MainAbout = () => {
  return (
    <main className="main__about">
        <h1 className='head'><span>About me</span></h1>
        <Biographic />
        <ImgProfile/>
    </main>
  );
}

export default MainAbout;