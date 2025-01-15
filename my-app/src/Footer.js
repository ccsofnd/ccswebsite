import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import NDLogo from './svg-logos/NDLogo';
const Footer = () => {

  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <h1>Contact</h1>
          <p>Email: <a href="mailto:ccs@nd.edu">CCS</a></p>
          <FaInstagram size={32} />
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