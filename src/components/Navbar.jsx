import { FaCode, FaHome, FaUser, FaCogs, FaProjectDiagram, FaCertificate, FaEnvelope } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className="navbar">
            <div className="logo" onClick={() => scrollToSection('hero')}>
                Disha<span>.dev</span>
                <FaCode className="logo-icon" />
            </div>

            <ul className="nav-links">
                <li>
                    <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                        <FaHome className="nav-icon" /> Home
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                        <FaUser className="nav-icon" /> About me
                    </a>
                </li>
                <li>
                    <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                        <FaCogs className="nav-icon" /> Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                        <FaProjectDiagram className="nav-icon" /> Projects
                    </a>
                </li>
                <li>
                    <a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection('certifications'); }}>
                        <FaCertificate className="nav-icon" /> Certifications
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                        <FaEnvelope className="nav-icon" /> Contact me
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;