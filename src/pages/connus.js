import React from "react"
import { Helmet } from "react-helmet"


import Layout from "../components/layout"

import img0 from '../images/screenshots/connus-banner.png'
import img1 from '../images/screenshots/connus-1.png'
import img2 from '../images/screenshots/connus-2.png'
import img3 from '../images/screenshots/connus-3.png'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Orbit DevStudio | Connus</title>
      <meta name="description" content="Overzicht van de website voor Connus samen met Jens Deryckere."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, job match, job-match" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <div className="project-container">
    <div className="container">
      <a href="/#projects">Terug naar overzicht</a>
      <h1>Mijn projecten</h1>
      <h2>Website Connus</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Project</h3>
          <p>De jonge startup Connus vroeg Jens Deryckere en mezelf om een prachtig design te ontwikkelen tot een echte website. Connus is een applicatie die zich toespitst op het connecteren van brands met de voor hen perfecte influencers. Samen brachten we hun verhaal naar de wereld door middel van deze landingspagina.</p>
          </div>
        <div className="col-12 col-md-6">
          <h3>Technologieën</h3>
          <p>React Native, Adobe XD, Github</p>
         </div>
        <div className="col-12 col-md-6">
          <img src={img0}/>
        </div>
        <div className="col-12 col-md-6">
          <img src={img1}/>
        </div>
        <div className="col-12 col-md-6">
          <img src={img2}/>
        </div>
        <div className="col-12 col-md-6">
          <img src={img3}/>
        </div>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
