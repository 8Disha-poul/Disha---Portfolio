import '../styles/footer.css';
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
function Footer(){
    return(
     <footer className="footer">

      <div className="footer-content">

        <p>@ 2026 Disha Poul</p>

        <div className="footer-icons">

          <a href="https://www.linkedin.com/in/disha-poul8/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/8Disha-poul" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <div className="phone">
            <FaPhone />
            <span>+91 8767573938</span>
          </div>

        </div>

      </div>
     </footer>
    );
}
export default Footer;