import ContactForm from "./ContactForm";
import React from "react";
import "./About.css"; // Import your CSS file for styling


const ABOUT = () => {
  return (
    <div className="content-section active">

        <div class="title-name">
                <p class="first-name">Ravi Kumar</p>
                <p class="last-name">Bandapelli </p>
                <p class="he-him">(he/him)</p>
        </div>

        <div class="sub-title">
                Experimental Condensed Matter Physicist | 2D Materials, Spintronic devices and Thin Film Specialist 
            </div>  
            
        <div class="about-ravi">
                <h2>About Me</h2>
                <p> "I engineer nanoscale magnetic materials to power the next generation of computing. 
                    By manipulating spins at atomic scales, I design faster, 
                    more efficient memory technologies that bridge the gap between 
                    fundamental physics and real-world applications."
                </p>
                <h4>Core Expertise</h4>
                <ul>
                    <li>🔬 Thin Film Architectures: 
                        Specialized in UHV-deposited magnetic heterostructures (CoFeB, CrFe) and 
                        2D van der Waals materials for spintronic devices.</li>
                    <li>🛠️ Nanofabrication: Hands-on experience in e-beam/laser lithography, 
                        plasma etching, and device integration for quantum and classical computing.</li>
                    <li>📊 Advanced Characterization: Expertise in XRD, AFM, SQUID, and cryogenic magnetotransport 
                        to correlate structure with spin-dependent phenomena.</li>
                    <li>🤝 Collaborative Innovator: Proven track record of translating academic research into 
                        industry-relevant solutions at CMU and IISc.</li>

                </ul>

                <h4>Research Philosophy</h4>
                <p>"My work sits at the intersection of curiosity-driven science and applied engineering. 
                    Whether quantifying Dzyaloshinskii-Moriya interactions or optimizing 2D material 
                    transfer processes, I thrive on solving complex materials challenges with rigorous 
                    experimentation and creative problem-solving. I believe the future of information 
                    technology lies in harnessing quantum mechanical phenomena—and I’m committed to building 
                    the materials foundation to make it possible."</p>


        </div>    
        <div class="content-section active">
            <h2>Research Interests</h2>
            <ol>
                <li>Spintronic Materials & Devices <br />
                    <p>Designing thin-film heterostructures (CoFeB, CrFe, Ta/Pt) for 
                        next-generation memory and logic applications, with focus on:
                    </p>
                    <ul>
                        <li>
                            Interfacial magnetism: Dzyaloshinskii-Moriya interaction (DMI), perpendicular magnetic anisotropy
                        </li>
                        <li>
                            Spin-orbit torque devices: Current-induced magnetization switching for energy-efficient computing
                        </li>
                        <li>
                           2D material integration: Van der Waals heterostructures for novel spin transport phenomena 
                        </li>
                    </ul>
                </li>


                <li>Advanced Thin Film Engineering
                    <p></p>
                    <ul>
                        <li>Ultra-high vacuum (UHV) deposition: 
                            Precision growth of magnetic and superconducting films via sputtering/e-beam evaporation</li>
                        <li>Nanoscale characterization: Correlating microstructure (XRD, AFM) 
                            with magnetic/electronic properties (SQUID, magnetotransport)</li>
                    </ul>
                    
                </li>


                 <li>Quantum & Neuromorphic Computing Materials
                    <p></p>
                    <ul>
                        <li>Magnetic skyrmions: Topological spin textures for low-power memory</li>
                        <li>Magnetocaloric materials: Thickness-dependent effects for micro-cooling applications</li>
                        <li>Bio-inspired architectures: Materials mimicking neural networks for in-memory computing</li>
                    </ul>
                    
                </li>

                 <li> Sustainable Nanoelectronics
                    <p></p>
                    <ul>
                        <li>Oxide interfaces: Exploring resistive switching in rare-earth doped oxides</li>
                        <li>Green fabrication: Optimizing dry transfer processes for 2D material devices

</li>
                    </ul>
                    
                </li>
            </ol>
        </div>

      <h2>Call-to-Action (CTA):</h2>
      <p>"Explore my projects below, or connect with me to discuss collaborations in advanced materials research!"</p>
      <ContactForm />
      
      <div class="social-icons">
            <a class="social-icon" href="#!"><i class="fab fa-linkedin-in"></i></a>
            <a class="social-icon" href="#!"><i class="fab fa-github"></i></a>
            <a class="social-icon" href="https://www.facebook.com/ravisri.phy"><i class="fab fa-facebook-f"></i></a>
        </div>
    </div>
  );
};

export default ABOUT;