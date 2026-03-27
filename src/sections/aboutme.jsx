import img2 from '../assets/img2.jpeg'
import '../styles/about.css';
function About(){
    return(
     <section id="about">
    

<div className="about-card">
  <div className="about-card">

  <img src={img2} className="about-img" alt="image" />

  <div className="about-content">
    <h2>About Me</h2>
    
        <p className="about-text">
I am a passionate Computer Science student currently pursuing my Master of Computer Applications (MCA), with a strong interest in building real-world solutions through technology. 

I have a solid foundation in programming and enjoy working with technologies like Java, React, and MySQL to develop full-stack applications. My projects reflect my ability to solve practical problems, including developing systems with user-focused features and clean interfaces.

I am particularly interested in Artificial Intelligence and continuously explore new concepts to enhance my understanding in this domain. Alongside technical skills, I focus on improving my problem-solving abilities and writing efficient, optimized code.

I am eager to begin my professional journey in a dynamic organization where I can apply my skills, learn from real-world challenges, and contribute meaningfully to impactful projects.
</p>
        
      </div>
    </div>
  </div>

       </section> 
    );
}
export default About;