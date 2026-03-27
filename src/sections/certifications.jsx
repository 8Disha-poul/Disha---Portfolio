import '../styles/certifications.css';
function Certifications() {
  return (
    <section id="certifications">
      <h2>Certifications</h2>

      <div className="cert-container">

        <div className="cert-card">
          <h3>Java Programming (12 Weeks)</h3>
          <p>NPTEL - IIT Kharagpur</p>
          <p className="tag">Elite Certificate</p>

          <a href="https://drive.google.com/file/d/1DsjN0vmkkGyjnu5-Vmy8i9NFWaiulvxC/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>

        <div className="cert-card">
          <h3>Microsoft Generative AI Certification</h3>
          <p>Career Essentials in Generative AI by Microsoft and LinkedIn</p>

          <a href="https://lnkd.in/eWt-CFKN#" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
         <div className="cert-card">
          <h3> 24 Hour Hackathon Participation</h3>
          <p>Navonmesh 2026 – a National Level Hackathon</p>

          <a href="https://drive.google.com/file/d/1DGux5eNqUAcGbeGxHVSmx8yQNHSDg-UM/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;