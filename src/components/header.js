import React from "react"
import Image from '../components/image';

import githubIcon from '../images/icons/github.svg';
import linkedinIcon from '../images/icons/linkedin.svg';
import logo from '../images/logo-md.png';


const Header = () => (
  <div className="nav-section">
    <div className="nav-section__container container">
        {/* <a href="/"><Image className="nav-section-container__logo" fixed="../images/logo_md.svg" alt="Medium logo"/></a> */}
        <a href="/"><img src={logo} /></a>
        <div className="icon-group">
          <a href="https://github.com/hansvertriest" target="blank"><img src={githubIcon}/></a>
          <a href="https://be.linkedin.com/in/hans-vertriest-a57763174" target="blank"><img src={linkedinIcon}/></a>
          </div>
          {/* <div className="nav-section-container__nav d-none d-md-block">
              <a className="nav-section-container-nav__item" href="#home">home</a>
              <a className="nav-section-container-nav__item" href="#home">visie</a>
              <a className="nav-section-container-nav__item" href="#home">over mij</a>
              <a className="nav-section-container-nav__item" href="#home">projecten</a>
              <a className="nav-section-container-nav__item" href="#home">contacten</a>
          </div> */}
    </div>
      
  </div>
)

export default Header
