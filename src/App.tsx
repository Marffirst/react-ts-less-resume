import React from 'react';

import './App.css';

function App() {
  return (
    /* Main container start */
    <div className="main-container">
        {/* Main content section start */}
        <div className="main-content-section"> 
            {/* About me section star */}
            <div className="about-me-section">
                        <h2 className="about-me-profession">Front-End Developer</h2>
                        <h1 className="about-me-name">Sergey Urakov</h1>
                        <p className="about-me-description">Hello. My name is Sergey Urakov and I am FrontEnd developer</p>
            </div>
            {/* About me section end */}
            {/* My projects section start */}
            <div className="my-projects-section"> 
                <h3 className="main-content-title">Projects</h3>
                <ol className="my-projects-list">
                    <li className="my-projects-item"> 
                        <span className="my-projects-text">
                            <a href="http://marffirst.zzz.com.ua/" className="my-projects-link">http://marffirst.zzz.com.ua/</a> 
                            ..............
                            <span className="my-projects-bracket">[</span> HTML5, CSS3 <span className="my-projects-bracket">]</span>
                        </span>
                    </li>
                    <li className="my-projects-item"> 
                        <span className="my-projects-text">
                            <a href="https://cryptohub.goit.global/" className="my-projects-link">https://cryptohub.goit.global/</a> 
                            ........
                            <span className="my-projects-bracket">[</span> JavaScript <span className="my-projects-bracket">]</span>
                        </span>
                    </li>
                    <li className="my-projects-item"> 
                        <span className="my-projects-text">
                            <a href="https://kidslike.goit.global/" className="my-projects-link">https://kidslike.goit.global/</a> 
                            ...............
                            <span className="my-projects-bracket">[</span> React.js, Node.js <span className="my-projects-bracket">]</span>
                        </span>
                    </li>
                </ol>
            </div>
            {/* My projects section end */}
            {/* My work experience section start */}
        <div>
            <div className="my-work-experience-section">
                <h3 className="main-content-title">Work Experience</h3>
                {/* Company 3 start */}
                <div className="my-work-experience-company-block">
                    <h4 className="my-work-experience-position">Front-End Developer <span className="my-work-experience-company">Freelance</span></h4> 
                    <p className="my-work-experience-period">September 2020 - up to now    <span className="my-work-experience-divider">|</span>  Country</p>
                    <ul className="my-work-experience-duties">
                        <li className="my-work-experience-duty">Сommercial sites and online stores development</li>
                        <li className="my-work-experience-duty">Business Application Development</li>
                        <li className="my-work-experience-duty">Developing apps for fun</li>
                        <li className="my-work-experience-duty">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                    </ul>
                </div>
                {/* Company 3 end */}
                {/* Company 2 start */}
                <div className="my-work-experience-company-block">
                    <h4 className="my-work-experience-position">Engeneer <span className="my-work-experience-company">YURIA-PHARM LLC</span></h4> 
                    <p className="my-work-experience-period">June 2018 - uo to now    <span className="my-work-experience-divider">|</span>   Country</p>
                    <ul className="my-work-experience-duties">
                        <li className="my-work-experience-duty">Implementation of the latest methods of automation and dispatching</li>
                        <li className="my-work-experience-duty">Increasing the level of purity in sterile drug production technology</li>
                        <li className="my-work-experience-duty">Implementation of the technology for the production of compressed nitrogen ultraheight purity and automation of its continuous supply for the production of nitrogen-containing drugs</li>
                    </ul>
                </div>
                {/* Company 2 end */}
                {/* Company 1 start */}
                <div className="my-work-experience-company-block">
                    <h4 className="my-work-experience-position">Electrical Technician  <span className="my-work-experience-company">Cherkasy Budinok Torgivli  LLC</span></h4> 
                    <p className="my-work-experience-period">August 2008 - June 2018    <span className="my-work-experience-divider">|</span>   Country</p>
                    <ul className="my-work-experience-duties">
                        <li className="my-work-experience-duty">Implementation of frequency regulated water supply system</li>
                        <li className="my-work-experience-duty">Launch of a modern air supply system</li>
                        <li className="my-work-experience-duty">Development and implementation of energy saving in the hot heating system</li>
                    </ul>
                </div>
                {/* Company 1 end */}
            </div>
        </div>
        {/* My work experience section end */}
        {/* My education section start */}
        <div className="my-education-section"> 
            <h3 className="my-education-content-title">Education</h3>
            <h4 className="my-education-company">Cherkasy State Technological University</h4> 
            <h4 className="my-education-position">Magister of business administration</h4> 
            <p className="my-education-period">September 2008 - June 2013   <span className="my-education-divider">|</span>   Country</p>
        </div>
        {/* My education section end */}
        </div>
        {/* Main content section end */}
        {/* Sydebar section start */}
<div className="sydebar-section">
    <img className="photo" src="img/photo.jpg" alt="my photogram" / >
{/* Contacts section start */}
   <div className="contacts-section">
        <h3 className="sidebar-title">Contacts</h3>
        <div>
            <span className="contacts-section-type">C:</span>
            <a className="contacts-section-link" href="tel:+380954986222">+38 (095) 498-62-22</a>
        </div>
        <div>
            <span className="contacts-section-type">E:</span>
            <a className="contacts-section-link" href="mailto:chornyiav@gmail.com">urakov.serhii@uf.ua</a>
        </div>
   </div>
{/* Contacts section end */}
{/* Tech skills start */}
   <div className="tech-skills">
       <h3 className="sidebar-title">Tech Skills</h3>
       <ul className="tech-skills-list">
            <li className="tech-skills-item"><span className="tech-skills-text">HTML5</span></li>
            <li className="tech-skills-item"><span className="tech-skills-text">CSS3</span></li>
            <li className="tech-skills-item"><span className="tech-skills-text">GIT</span></li>
            <li className="tech-skills-item"><span className="tech-skills-text">WebPack</span></li>
            <li className="tech-skills-item"><span className="tech-skills-text">JavaScript</span></li>
            <li className="tech-skills-item"><span className="tech-skills-text">React.js</span></li>
            <li className="tech-skills-item"><span className="tech-skills-text">Node.js</span></li>
       </ul>
   </div>
{/* Tech skills end */}
{/* Soft skills start */}
   <div className="soft-skills">
        <h3 className="sidebar-title">Soft Skills</h3>
        <ul className="soft-skills-list">
            <li className="soft-skills-item"><span className="tech-skills-text">Scrum</span></li>
            <li className="soft-skills-item"><span className="tech-skills-text">Agile</span></li>
            <li className="soft-skills-item"><span className="tech-skills-text">GTD</span></li>
            <li className="soft-skills-item"><span className="tech-skills-text">Teamwork</span></li>
        </ul>
    </div>
{/* Soft skills end */}
</div>
{/* Sydebar section end */}
    </div>
    /* Main container end */

  );
}

export default App;
