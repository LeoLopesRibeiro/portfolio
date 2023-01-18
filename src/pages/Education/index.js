import "./style.css";
import { Link } from "react-router-dom";

function Education(){
    return(
        <div className="body">
        <div class="page">
          <div class="image" id="parallaxEducation">
     
            <div class="image_layer" id="image-3"></div>
            {/* <section className="sectionParallax">
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
              <span className="spanEducation"></span>
            </section> */}
            <div class="image_layer" id="image-2"></div>
          </div>
          <div class="overflow">
        <div className="end-straight">
          <div className="straight-right">
                <div className="align-text">
                  <p className="educationTittle">Schooling</p>
                  <p className="education-school">High School: (expected end date: December 2023) - E.E Sister Charlita</p>
                  <p>Systems development: (expected end date: June 2023) - SENAI</p>
                  <div className="alignButton">
                  <Link className='link' to={"/"}>Home</Link>
                  <Link className='link' to={"/projects"}>Projects</Link>
                  </div>
                </div>
                <div className="vectorAlign">
                  <img className="vectorSchool" src="./assets/straightVector.svg" alt="Vector curve"></img>
                  <img className="vectorSchooling" src="./assets/schooling.svg" alt="Vector curve"></img>
                </div>
              </div>
        </div>
            <div className="alignment-straight">
              <div className="straight1">
                  <img className="disableVector" src="./assets/vector10.svg" alt="Vector curve"></img>
                  <div className="certificates">
                  <h3 className="certificatesTittle">Certificates</h3>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1DrEYgSNhvce0t4HVYMALx93m8J8zLlzd/view?usp=sharing" target="_blank" rel="noreferrer">Desvendando O 5G - SENAI</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1DuOs435M4mbJGO3wdmDJc2uxiIB_Lvw3/view?usp=sharing" target="_blank"  rel="noreferrer">Econômia Circular - SENAI</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1EIiPqIKHm8yxY_vGBF2yaPXJC3JyFJHd/view?usp=sharing" target="_blank" rel="noreferrer">Programming Essentials in Python - CISCO Networking Academy®</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1E2-LfCaPHj_XzCObwxknBX3MmJ2aJBu2/view?usp=sharing" target="_blank" rel="noreferrer">Ética no Desenvolvimento de Sistemas - Fundação Bradesco</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1E4H3c_n9ounfj2WcWIkb2RdH2EpRItpx/view?usp=sharing" target="_blank" rel="noreferrer">Introduction to Cybersecurity - CISCO Networking Academy®</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1ECc1kaXpJEuuMX5Efaz4sOAHEzvnSmuD/view?usp=sharing" target="_blank" rel="noreferrer">NDG Linux Unhatched - CISCO Networking Academy®</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1EL2ntDJfWtol12XcjSmAL1HyP-nqIPMP/view?usp=sharing" target="_blank" rel="noreferrer">Privacidade e Proteção de dados (LGPD) - SENAI</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1EPHPhJEHiI21r8gbnROeijKo5zKJWBZR/view?usp=sharing" target="_blank" rel="noreferrer">Lógica de Programação - Fundação Bradesco</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1ERBFugwktCfBWT-MmM7OuaxL8Bwv_ISQ/view?usp=sharing" target="_blank" rel="noreferrer">Programação Orientada a Objetos - Fundação Bradesco</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1ESt_p55dqx5bkRz1uqfJSlXKRzM6g9n_/view?usp=sharing" target="_blank" rel="noreferrer">Linguagem de Modelagem Unificada - Fundação Bradesco</a>
                  <a className="linkCertificates" href="https://drive.google.com/file/d/1ibJphYCMwFfOE6unEPCVXTo4_564WL52/view?usp=share_link" target="_blank" rel="noreferrer">Spread Full Stack Developer - DIO</a>
                  </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
}

export default Education;