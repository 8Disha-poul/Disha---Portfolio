import '../styles/projects.css';
import cof from '../assets/cof.png';
import portfolio from '../assets/portfolio.png';
function Projects(){
    return(
        <section id="projects">
  <h2>My Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <img src={portfolio} alt="project" />

      <h3>Portfolio Website</h3>

      <p><strong>Key Features:</strong></p>

<ul>
  <li>Developed a responsive portfolio using React with a clean UI.</li>
  <li>Showcases skills, projects, and certifications in structured sections.</li>
  <li>Integrated EmailJS for a working contact form.</li>
  <li>Built an interactive chatbot for quick user assistance.</li>
</ul>

      <p className="tech">React | HTML | CSS | JavaScript</p>

      <div className="buttons">
        <a href="#">GitHub</a>
        <a href="#">Live</a>
      </div>
    </div>
    <div className="project-card featured">
      <img src={cof} alt="project" />

      <h3>Pre-Oreder and Table Booking System For a Coffee Shop</h3>
       <p><strong>Key Features:</strong></p>
      <ul>
  <li>Developed a full-stack web application using Java (JSP & Servlets).</li>
  <li>Enabled users to pre-order food and book tables online.</li>
  <li>Managed backend logic and request handling using Servlets.</li>
  <li>Integrated MySQL database for storing user, order, and booking data.</li>
</ul>

      <p className="tech">Java | JSP | Servlet | MySQL | HTML | CSS | JavaScript</p>

      <div className="buttons">
        <a href="https://github.com/8Disha-poul/Pre-Oreder-and-Table-Booking-System-For-a-Coffee-Shop.git">GitHub</a>
        
      </div>
    </div>
  </div>
</section>
    );
}
export default Projects;