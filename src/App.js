import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
          </div>
          <div className="Experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Patricia Marie Mandanas</h1>
      <h2>Future Web Developer</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <div className="section">
        <h1>CONTACT</h1>
        <p className="contact-item">
          &#9993; patricialfaro9@gmail.com {}
        </p>
        <p className="contact-item">
          &#9742; +639367768955 {}
        </p>
        <p className="contact-item">
          &#x1F4CD; San Simon Pampanga {}
        </p>
        <a href="https://github.com/yourprofile" className="contact-item">
          GitHub {}
        </a>
        <a href="https://linkedin.com/yourprofile" className="contact-item">
          LinkedIn {}
        </a>
      </div>

      <div className="section">
      <h2>EDUCATION</h2>
      <p className="education-item">Bachelor of Information Technology</p>
      <p>Assumption University</p>
      <p>San Pedro National High School - 2002-2006</p>
      <p>San Nicolas Elementary School - 1997-2002</p>
    </div>
    
        <h2>SKILLS</h2>
        <ul className="skills-list">
          <li>Python</li>
          <li>JavaScript</li>
          <li>MySQL</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      
  );
}

function Experience() {
  return (
    <div>
      <h1>Working Experience</h1>
      <h3>Factory Worker</h3>
      <div>
        <ul className="Company">
          <li>Superl Corporation</li>
          <p>Table worker - 2016-2018</p>
          <li>Formosa Ceramic Tiles</li>
          <p>Printer Operator - 2008-2011</p>
          <li>Chowking Food Corp</li>
          <p>Cashier - 2007-2008</p>
        </ul>
      </div>

      <div className="section">
        <h1> Student Experience</h1>
        <h2>PROJECTS</h2>
        <ul className="projects-list">
          <li>Python - Motion Detector</li>
          <li>Wireframing</li>
          <li>Mockup</li>
          <li>CodePen Calculator</li>
          <li>CodePen Grading System</li>
          <li>Ordering System</li>
          <li>Payroll System</li>
          <li>Responsive Web Portfolio</li>
          <li>GitHub Resume</li>
        </ul>
      </div>

      <div className="section">
        <h2>10 Things That Require Zero Talent</h2>
        <ul className="zero-talent-list">
          <li>Being On Time</li>
          <li>Making An Effort</li>
          <li>Being High Energy</li>
          <li>Having A Positive Attitude</li>
          <li>Being Passionate</li>
          <li>Using Good Body Language</li>
          <li>Being Coachable</li>
          <li>Doing A Little Extra</li>
          <li>Being Prepared</li>
          <li>Having A Strong Work Ethic</li>
        </ul>
      </div>
    </div>
  );
}
