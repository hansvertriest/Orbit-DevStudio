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
      <title>Orbit DevStudio | Vlugmoor</title>
      <meta name="description" content="Datavisualisatie voor Vlugmoor UGent."/>
      <meta name="keywords" content="web, development, webdesign, website, freelance, app, application, datavisualisatie, data" />
      <meta name="author" content="Hans Vertriest" />
    </Helmet>
    <div className="project-container">
    <div className="container">
      <a href="/#projects">Terug naar overzicht</a>
      <h1>Mijn projecten</h1>
      <h2>Datavisualisatie: Vlugmoor Ugent</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Project</h3>
          <p>Vlugmoor is software ontwikkeld om de invloed van externe krachten zoals wind en andere, passerende schepen op een aangemeerd schip te simuleren. Omdat deze software echter enkel data produceert in de vorm van xlsx en csv bestanden, werden <strong>Arne Verleyen</strong> en ik ingeschakeld om deze data te visualiseren. Op deze manier heeft het vlugmoor-team een visuele ondersteuning om hun berekening over te brengen aan haven-arbeiders.</p>
          </div>
        <div className="col-12 col-md-6">
          <h3>Technologieën</h3>
          <p>Webpack, Handlebars, HTML5, Vanilla Javascript, Express.js, MongoDB</p>
          <h3>Eigen inbreng</h3>
          <p>Simulation-engine (vanilla-js), pitch-video</p>
         </div>
        <div className="col-12 col-md-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cz_KLQUMdJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
        </div>
        
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
