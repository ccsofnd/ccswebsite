import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import NDLogo from './svg-logos/NDLogo';
const Footer = () => {

  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <h1>Contact</h1>
          <div>
            <a href="mailto:ccs@nd.edu"><MdOutlineEmail size={32} /></a>
            <a href="https://www.instagram.com/ccsofnd/" target="blank"><FaInstagram size={32} /></a>
          </div>
          <p>&#169; 2025 Chinese Cultural Society</p>
        </div>
        <div className="footer-right">
          <NDLogo height={55} width={235} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;