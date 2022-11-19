import './FooterHeader.css';
import Link from '../LinkIcon';
import linkedin from '../../../assets/linkedin-in.svg';
import github from '../../../assets/github.svg';
import codewars from '../../../assets/cib-codewars.svg';

const FooterHeader = () => {
  return (
    <nav className="footer__header">
      <ul>
        <Link href={'https://www.linkedin.com/in/giuseppe-conti-4a806b16/'} source={linkedin} alt="linkedin"/>
        <Link href={'https://github.com/peppeconti'} source={github} alt="github"/>
        <Link source={codewars} alt="codewars"/>
      </ul>
    </nav>
  );
}

export default FooterHeader;