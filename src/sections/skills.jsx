import { FaPython, FaGitAlt,FaNodeJs ,FaCss3Alt} from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiReact, SiHtml5,SiVercel,SiMysql,SiRender } from "react-icons/si";
import {DiEclipse,DiJava} from "react-icons/di";
import {VscVscode} from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import '../styles/skills.css';
function Skills(){
    return(
        <section id="skills">
        <div className="skills">
            <h2 className="skills-title">My Skills</h2>
            <div className="programming">
                <h3>Programming Skills</h3>
                <div className="skills-grid">
                <div className="skill-card">
                    <SiCplusplus /> C++
                </div>
                <div className="skill-card">
                    <DiJava /> Java
                </div>
                <div className="skill-card">
                    <FaPython /> Python
                </div>
                <div className="skill-card">
                    <TbBrandCSharp /> C#
                </div>
            </div>
            </div>
            <div className="programming">
                <h3>Web Development</h3>
                <div className="skills-grid">
                <div className="skill-card">
                    <SiHtml5 /> HTML5
                </div>
                <div className="skill-card">
                    <FaCss3Alt /> CSS3
                </div>
                <div className="skill-card">
                    <SiJavascript />JavaScript
                </div>
                <div className="skill-card">
                    <SiReact />React.js
                </div>
                <div className="skill-card">
                    <FaNodeJs/>Node.js
                </div>
            </div>
            </div>
            <div className="programming">
                <h3>Tools & Platforms</h3>
                <div className="skills-grid">
                <div className="skill-card">
                    <FaGitAlt/>Git
                </div>
                <div className="skill-card">
                    <VscVscode /> VS Code 
                </div>
                <div className="skill-card">
                    <DiEclipse />Eclipse
                </div>
                <div className="skill-card">
                    <SiVercel />Vercel
                </div>
                <div className="skill-card">
                    <SiRender/>Render
                </div>
            </div>
            </div>
            <div className="programming">
                <h3>Database</h3>
                <div className="skills-grid">
                <div className="skill-card">
                    <SiMysql/>MySQL
                </div>
            </div>
        </div>
        </div>
    </section>
    );
}
export default Skills;