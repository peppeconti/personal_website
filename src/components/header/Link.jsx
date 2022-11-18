import './Link.css';

const Link = ({ source, alt }) => {
  return (
    <a className="link">
      <li>
        <img src={source} alt={alt}/>
      </li>
    </a>
  );
}

export default Link;