import React from "react"
import Image from '../components/image';

import logo_md from '../images/logo_md.png';

const Header = ({ siteTitle }) => (
  <div className="nav-section">
    <div className="nav-section__container container ">
        <Image className="nav-section-container__logo" fixed="../images/logo_md.svg" alt="Medium logo"/>
        <div className="nav-section-container__nav d-none d-md-block">
            <a className="nav-section-container-nav__item" href="#home">home</a>
            <a className="nav-section-container-nav__item" href="#home">visie</a>
            <a className="nav-section-container-nav__item" href="#home">over mij</a>
            <a className="nav-section-container-nav__item" href="#home">projecten</a>
            <a className="nav-section-container-nav__item" href="#home">contacten</a>
        </div>
    </div>

  </div>
)

export default Header
