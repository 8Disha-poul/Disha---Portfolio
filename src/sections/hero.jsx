import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaCode, FaArrowRight } from 'react-icons/fa';
import '../styles/hero.css';
import profile from '../assets/background.jpeg';

function Hero() {
    return (
        <section id="hero">
            <div className="hero-container">
                <div className="header">
                    {/* Left Side - Text Content */}
                    <div className='text'>
                        <div className="greeting">
                            <span className="wave-hand">👋</span>
                            <span className="greeting-text">Hello, I'm</span>
                        </div>
                        
                        <h1>
                            Disha <span className="highlight">Poul</span>
                        </h1>
                        
                        <div className="title-container">
                            <span className="static-text">I'm a </span>
                            <span className='typing'>Computer Science Student | AI Enthusiast</span>
                        </div>
                        
                        <p className="description">
                            Passionate about building innovative solutions with AI and modern web technologies. 
                            I love transforming ideas into beautiful, functional digital experiences.
                        </p>
                        
                        <div className="cta-buttons">
                            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Contact Me <FaEnvelope className="btn-icon" />
                            </button>
                        </div>
                        
                        <div className="social-links">
                            <a href="https://github.com/8Disha-poul" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/disha-poul8/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            
                            <a href="#" className="social-icon">
                                <FaCode />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Profile Image */}
                    <div className="image-container">
                        <div className="image-wrapper">
                            <img src={profile} alt="Disha Poul" className="profile-image" />
                            <div className="image-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;