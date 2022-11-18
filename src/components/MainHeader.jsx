import './MainHeader.css';
import Band from './Band';
import Maze from './Maze';

const MainHeader = () => {
  return (
    <div className="main__header">
        <Maze/>
        <Band text="Giuseppe Conti" start="1" end="2" gradient="270deg, #FF005C 0%, rgba(255, 0, 92, 0) 86.39%"/>
        <Band text="Webdeveloper" start="2" end="3" gradient="270deg, #61DAFB 0%, rgba(60, 220, 183, 0) 88.33%"/>
        <Band text="Milan" start="3" end="4" gradient="270deg, #F7DF1E 0%, rgba(15, 15, 15, 0) 85.83%"/>
    </div>
  );
}

export default MainHeader;