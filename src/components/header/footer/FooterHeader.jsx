import './FooterHeader.css';
import Link from '../Link';
import linkedin from '../../../assets/linkedin-in.svg';
import github from '../../../assets/github.svg';
import codewars from '../../../assets/cib-codewars.svg';

const FooterHeader = () => {
  return (
    <nav className="footer__header">
      <ul>
        <Link source={linkedin} alt="linkedin"/>
        <Link source={github} alt="github"/>
        <Link source={codewars} alt="codewars"/>
      </ul>
    </nav>
  );
}

export default FooterHeader;