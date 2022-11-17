import './Header.css';
import maze from '../assets/maze.svg';

function Header() {
  return (
    <div className="header">
      <img src={maze} alt="maze"></img>
    </div>
  );
}

export default Header;